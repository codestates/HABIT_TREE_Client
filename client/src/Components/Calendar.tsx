import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import { IconButton } from '@material-ui/core';
import SentimentSatisfiedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import { useEffect, useState } from 'react';
import '../../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css';
import { updateHabit } from '../API/habits';
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
};

type Events = {
  id: number | null;
  title: string | null;
  allday: boolean | null;
  start: Date | null;
  end: number | null;
};
const CalendarBlock = styled.div`
  margin-top: 4%;
  margin-left: 3%;
`;
const localizer = momentLocalizer(moment);

const ReactCalendar = ({ habits }: HabitsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [date, setClickDate] = useState(new Date('2021-03-05'));
  const [persent, setPersent] = useState<any>({});
  const [event, setEvents] = useState<Events[]>([]);
  useEffect(() => {
    if (habits.length === 0) {
      setEvents([]);
    } else {
      console.log(6);
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

        // 처음으로 리렌더링을 시작
      });
      setEvents(result);
    }
  }, [habits]);
  console.log(3);
  console.log(habits);
  console.log(event);
  const sumChecked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    let value = Number(e.currentTarget.value);
    if (!persent.id) {
      setPersent({ id: value });
    } else {
      let lastValue = persent.id;
      if (persent.id >= '100') {
        return;
      } else {
        setPersent({ ...persent, id: lastValue + value });
      }
    }
    console.log(Math.round(persent.id) + '%');
  };

  const realEvent = habits.filter((event: any) => {
    return new Date(event.end) > date;
  });

  const handleButtonClick = (id: number) => {
    updateHabit(id);
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
                  {console.log(element)}
                  <IconButton
                    arai-label="satisfied"
                    value={Number(3.5714285714285716)}
                    color="secondary"
                    onClick={(e) => {
                      sumChecked(e, element.id);
                      handleButtonClick(element.id);
                    }}
                  >
                    <SentimentSatisfiedIcon />
                  </IconButton>
                </span>
                <span>
                  <IconButton arai-label="dissatisfied" color="secondary">
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
