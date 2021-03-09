import { HdSharp } from '@material-ui/icons';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ReactCalendar from './Calendar';
import UploadHabit from './UploadHabit';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  width: 100%;
  margin-top: 30px;
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

type Obj = {
  [k: number]: number;
};

type HabitsProps = {
  habits: Habits[];
  handleHabits: (value: Habits[]) => void;
  percent: Obj;
  handlePercent: (value: Obj) => void;
};

type Events = {
  id: number | null;
  title: string | null;
  allday: boolean | null;
  start: Date | null;
  end: number | null;
};

const CalendarBlock = ({
  habits,
  handleHabits,
  percent,
  handlePercent,
}: HabitsProps) => {
  const [event, setEvents] = useState<Events[]>([]);

  const handleEvents = (value: Events[]) => {
    setEvents(value);
  };

  return (
    <Container>
      <UploadHabit
        habits={habits}
        event={event}
        setEvents={handleEvents}
        handleHabits={handleHabits}
      />
      <ReactCalendar
        habits={habits}
        event={event}
        setEvents={handleEvents}
        percent={percent}
        handlePercent={handlePercent}
      />
    </Container>
  );
};

export default CalendarBlock;
