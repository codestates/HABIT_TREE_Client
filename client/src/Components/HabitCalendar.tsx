import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
//import { FaCheck } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegThumbsDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import '../css/calendar.css';
import { updateHabit, removeHabit } from '../API/habits';
import styled from 'styled-components';
import { useSampleState } from '../Store/LoginToggleContext';
import 'moment/locale/ko';
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
  percent: Obj;
  handlePercent: (value: Obj) => void;
  handleHabits: (value: Habits[]) => void;
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
  margin-top: 20px;
  width: 80%;
`;

const ModalBlock = styled.div`
  Modal {
    margin-top: 30px;
  }
`;
const localizer = momentLocalizer(moment);

const ReactCalendar = ({
  habits,
  event,
  setEvents,
  percent,
  handlePercent,
  handleHabits,
}: HabitsProps) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [date, setClickDate] = useState(new Date());
  const toggle = useSampleState();
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
      handlePercent(obj);
    }
  }, [habits]);

  // 습관별 퍼센트 체크
  const sumChecked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    let value = Number(e.currentTarget.value);
    if (!percent[id]) {
      handlePercent({ ...percent, [id]: value });
    } else {
      let lastValue = percent[id];
      if (percent[id] >= 100) {
        return;
      } else {
        handlePercent({ ...percent, [id]: lastValue + value });
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
        handlePercent({ ...percent, [id]: habit.achieve });
      }
    }
  };

  // 서버에 habit 삭제 요청 메소드
  const deleteEvent = async (id: number) => {
    // event habit => id 동일
    if (toggle.toggle) {
      handleHabits(habits.filter((habit) => habit.id !== id));
      const result = await removeHabit(id);
    } else {
      console.log(id);

      setEvents(event.filter((ele) => ele.id !== id));
      delete percent[id];
      // console.log(percent);

      handlePercent({ ...percent });
    }
  };

  return (
    <>
      <CalendarBlock>
        <Calendar
          selectable
          events={event}
          defaultDate={moment().toDate()}
          eventPropGetter={() => ({ style: { backgroundColor: '#A0CFEC' } })}
          localizer={localizer}
          style={{
            width: '100%',
            height: '75vh',
          }}
          views={{
            month: true,
            week: true,
          }}
          messages={{
            next: '다음',
            today: '오늘',
            month: '월',
            previous: '이전 달',
            week: '주',
            day: '일',
            agenda: ' 누르지마세요',
          }}
          onSelectSlot={(slotInfo) => {
            setModalIsOpen(true);
            setClickDate(new Date(slotInfo.start));
          }}
        />
      </CalendarBlock>
      <ModalBlock>
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          shouldCloseOnEsc={true}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div className="modal__dialog">
            <div className="modal__content">
              <div className="modal__header">
                습 관 목 록
                <a href="#" className="modal__close" onClick={(e) => { setModalIsOpen(false) }}>&times;</a>
              </div>
              <ul className="modal__text" style={{ listStyle: 'none' }}>
                {realEvent.map((element: any) => (
                  <li key={element.id}>
                    <div >{element.title}
                    &nbsp;&nbsp;&nbsp;
                      <button className="modalButtons"
                        arai-label="satisfied"
                        value={Number(3.5714285714285716)}
                        onClick={(e) => {
                          handleButtonClick(e, element.id);
                        }}
                      >
                        <FaRegThumbsUp />
                        &nbsp;&nbsp;
                        <button className="modalButtons2"
                          arai-label="dissatisfied"
                          onClick={() => {
                            deleteEvent(element.id);
                          }}
                        >
                          <FaRegThumbsDown />
                        </button>
                      </button>
                    </div>
                  </li>

                ))}
              </ul>
            </div>
          </div>
        </Modal>
      </ModalBlock>
    </>
  );
};

export default ReactCalendar;
