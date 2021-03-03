import { useState } from 'react';
import ReactCalendar from './Calendar';
import UploadHabit from './UploadHabit';

const CalendarBlock = ({ habits, setHabits }: any) => {
  const [events, setEvents] = useState(habits);

  return (
    <div>
      <UploadHabit events={events} setEvents={setEvents} />
      <ReactCalendar events={events} setEvents={setEvents} />
    </div>
  );
};

export default CalendarBlock;
