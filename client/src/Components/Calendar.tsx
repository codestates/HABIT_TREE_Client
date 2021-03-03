import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import { IconButton } from '@material-ui/core';
import SentimentSatisfiedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import { useState } from 'react';
import '../../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css';

const localizer = momentLocalizer(moment);

const ReactCalendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [events, setEvents] = useState<any>([
    {
      id: 0,
      title: 'react 끝내기',
      allDay: true,
      start: new Date(),
      end: new Date(),
    },
    {
      id: 1,
      title: 'css 끝내기',
      allDay: true,
      start: new Date(),
      end: new Date(),
    },
    {
      id: 2,
      title: '서버클라연결 끝내기',
      allDay: true,
      start: new Date(),
      end: new Date(),
    },
  ]);

  const sumChecked1 = () => {
    let data: string[] = name;
    let sum: number = data.map(Number).reduce((a, b) => a + b);
    console.log(Math.round(sum) + '%(1)');
  };
  const sumChecked2 = () => {
    let data2: string[] = name2;

    let sum2: number = data2.map(Number).reduce((a, b) => a + b);
    console.log(Math.round(sum2) + '%(2)');
  };
  const sumChecked3 = () => {
    let data3: string[] = name3;
    let sum3: number = data3.map(Number).reduce((a, b) => a + b);
    console.log(Math.round(sum3) + '%(3)');
  };

  const [name, setName] = useState([]);
  const [name2, setName2] = useState([]);
  const [name3, setName3] = useState([]);

  return (
    <div>
      <div className="calendar">
        <Calendar
          selectable
          events={events}
          defaultDate={moment().toDate()}
          localizer={localizer}
          style={{ height: '100vh' }}
          onSelectSlot={() => setModalIsOpen(true)}
        />
      </div>
      <div className="modal_div">
        <Modal
          className="speech-bubble"
          isOpen={modalIsOpen}
          shouldCloseOnEsc={true}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h2>습관 목록</h2>
          {events.length === 0 ? '' : ''}
          {events.length === 1 ? (
            <ul style={{ listStyle: 'none' }}>
              <li>
                {`첫번째 목표 : ${events[0].title}`}
                <span>
                  <IconButton
                    arai-label="satisfied"
                    value={Number(3.5714285714285716)}
                    color="secondary"
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
            </ul>
          ) : (
            ''
          )}
          {events.length === 2 ? (
            <ul style={{ listStyle: 'none' }}>
              <li>
                {`첫번째 목표 : ${events[0].title}`}
                <span>
                  <IconButton
                    arai-label="satisfied"
                    value={Number(3.5714285714285716)}
                    color="secondary"
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
              <li>
                {`두번째 목표 : ${events[1].title}`}
                <span>
                  <IconButton
                    arai-label="satisfied"
                    value={Number(3.5714285714285716)}
                    color="secondary"
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
            </ul>
          ) : (
            ''
          )}
          {events.length === 3 ? (
            <ul style={{ listStyle: 'none' }}>
              <li>
                {`첫번째 목표 : ${events[0].title}`}
                <span>
                  <IconButton
                    arai-label="satisfied"
                    value={Number(3.5714285714285716)}
                    color="secondary"
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
              <li>
                {`두번째 목표 : ${events[1].title}`}
                <span>
                  <IconButton
                    arai-label="satisfied"
                    value={Number(3.5714285714285716)}
                    color="secondary"
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
              <li>
                {`세번째 목표 : ${events[2].title}`}
                <span>
                  <IconButton
                    arai-label="satisfied"
                    value={Number(3.5714285714285716)}
                    color="secondary"
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
            </ul>
          ) : (
            ''
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ReactCalendar;
