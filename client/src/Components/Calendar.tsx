import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import { IconButton } from '@material-ui/core';
import SentimentSatisfiedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import { useEffect, useState } from 'react';
import '../../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css';
import { updateHabit, removeHabit } from '../API/habits';
import styled from 'styled-components';

type Habits = {
  id: number;
  title: string;
  pass: number;
  clicked: number;
  achieve: number;
  treeType: string;
  userId: number;
  createdAt: Date;
};

type HabitsProps = {
  habits: Habits[];
  event: Events[];
  setEvents: (value: Events[]) => void;
};

type Events = {
  id: number | null;
  title: string | null;
  allday: boolean | null;
  start: Date | null;
  end: number | null;
};
type Obj = {
  [k: number]: number;
};
const CalendarBlock = styled.div`
  margin-top: 4%;
  margin-left: 3%;
`;
const localizer = momentLocalizer(moment);

const ReactCalendar = ({ habits, event, setEvents }: HabitsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [date, setClickDate] = useState(new Date());
  const [percent, setPercent] = useState<any>({});

  useEffect(() => {
    if (habits.length === 0) {
      setEvents([]);
    } else {
      let obj: Obj = {};
      habits.forEach((habit) => {
        obj[habit.id] = habit.achieve;
      });

      const result: Events[] = habits.map((habit) => {
        return {
          id: habit.id,
          title: habit.title,
          allday: true,
          start: habit.createdAt,
          end: new Date(habit.createdAt).setDate(
            new Date(habit.createdAt).getDate() + 27
          ),
        };
      });
      setEvents(result);
      setPercent(obj);
    }
  }, [habits]);

  // 습관별 퍼센트 체크
  const sumChecked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    let value = Number(e.currentTarget.value);
    if (!percent[id]) {
      setPercent({ ...percent, [id]: value });
    } else {
      let lastValue = percent[id];
      if (percent[id] >= '100') {
        return;
      } else {
        setPercent({ ...percent, [id]: lastValue + value });
      }
    }
  };

  const realEvent = event.filter((eve: any) => {
    return new Date(eve.end) > date;
  });

  // 습관 목록에서 '성공' 버튼 클릭 시
  const handleButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    // 로그인이 안 된 경우 => 한번만 클릭하게
    const token = localStorage.getItem('access_token');
    if (!token) {
      sumChecked(e, id);
    } else {
      // 로그인이 된 경우
      const habit = await updateHabit(id);
      if (habit.name === 'EntityNotFound') {
        console.log('업데이트 할 수 없습니다.');
      } else {
        setPercent({ ...percent, [id]: habit.achieve });
      }
    }
  };

  // 서버에 habit 삭제 요청 메소드
  const deleteEvent = async (id: number) => {
    const result = await removeHabit(id);
  };

  return (
    <>
      <CalendarBlock>
        <Calendar
          selectable
          events={event}
          defaultDate={moment().toDate()}
          localizer={localizer}
          style={{
            width: '90%',
            height: '60vh',
            marginBottom: '5%',
            paddingLeft: '5%',
          }}
          onSelectSlot={(slotInfo) => {
            setModalIsOpen(true);
            setClickDate(new Date(slotInfo.start));
          }}
        />
      </CalendarBlock>
      <div className="modal_div">
        <Modal
          className="speech-bubble"
          isOpen={modalIsOpen}
          shouldCloseOnEsc={true}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h2>습관 목록</h2>
          <ul style={{ listStyle: 'none' }}>
            {realEvent.map((element: any) => (
              <li key={element.id}>
                {element.title}
                <span>
                  <IconButton
                    arai-label="satisfied"
                    value={Number(3.5714285714285716)}
                    color="secondary"
                    onClick={(e) => {
                      handleButtonClick(e, element.id);
                    }}
                  >
                    <SentimentSatisfiedIcon />
                  </IconButton>
                </span>
                <span>
                  <IconButton
                    arai-label="dissatisfied"
                    color="secondary"
                    onClick={() => {
                      deleteEvent(element.id);
                      setEvents(event.filter((ele) => ele.id !== element.id));
                    }}
                  >
                    <SentimentDissatisfiedOutlinedIcon />
                  </IconButton>
                </span>
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    </>
  );
};

export default ReactCalendar;
