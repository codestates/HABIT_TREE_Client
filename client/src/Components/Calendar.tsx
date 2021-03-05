import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import { IconButton } from '@material-ui/core';
import SentimentSatisfiedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import { useState } from 'react';
import '../../node_modules/react-big-calendar/lib/addons/dragAndDrop/styles.css';
import { updateHabit } from '../API/habits';

const localizer = momentLocalizer(moment);

const ReactCalendar = ({ events, setEvent }: any) => {
  console.log(events);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [date, setClickDate] = useState(new Date());
  const [persent, setPersent] = useState<any>({});

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

  const realEvent = events.filter((event: any) => {
    return new Date(event.end) > date;
  });

  const handleButtonClick = (id: number) => {
    updateHabit(id);
  };

  return (
    <div>
      <div className="calendar">
        <Calendar
          selectable
          events={events}
          defaultDate={moment().toDate()}
          localizer={localizer}
          style={{ height: '90vh', marginBottom: '5%' }}
          onSelectSlot={(slotInfo) => {
            setModalIsOpen(true);
            setClickDate(new Date(slotInfo.start));
          }}
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
    </div>
  );
};

export default ReactCalendar;
