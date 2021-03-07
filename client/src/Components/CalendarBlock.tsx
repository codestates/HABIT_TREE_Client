import { HdSharp } from '@material-ui/icons';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ReactCalendar from './Calendar';
import UploadHabit from './UploadHabit';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 10%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
  handleHabits: (value: Habits[]) => void;
};

type Events = {
  id: number | null;
  title: string | null;
  allday: boolean | null;
  start: Date | null;
  end: number | null;
};

const CalendarBlock = ({ habits, handleHabits }: HabitsProps) => {
  const [event, setEvents] = useState<Events[]>([]);

  const handleEvents = (value: Events[]) => {
    setEvents(value);
  };

  return (
    <div>
      <UploadHabit
        habits={habits}
        event={event}
        setEvents={handleEvents}
        handleHabits={handleHabits}
      />
      <ReactCalendar habits={habits} event={event} setEvents={handleEvents} />
    </div>
  );
};

export default CalendarBlock;
