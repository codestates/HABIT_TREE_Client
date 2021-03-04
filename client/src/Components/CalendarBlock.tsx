import { HdSharp } from '@material-ui/icons';
import { Dispatch, SetStateAction, useState } from 'react';
import ReactCalendar from './Calendar';
import UploadHabit from './UploadHabit';

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
  setHabits: (value: Habits[]) => void;
};

type Events = {
  id: number;
  title: string;
  allday: boolean;
  start: Date;
  end: number;
};

const CalendarBlock = ({ habits, setHabits }: HabitsProps) => {
  const result = habits.map((habit) => {
    return {
      id: habit.id,
      title: habit.title,
      allday: true,
      start: habit.createdAt,
      end: habit.createdAt.setDate(habit.createdAt.getDate() + 27),
    };
  });
  const [events, setEvents] = useState(result);
  const handleEvent = (value: Events[]) => {
    setEvents(value);
  };
  return (
    <div>
      <UploadHabit events={events} setEvents={handleEvent} />
      <ReactCalendar events={events} setEvents={handleEvent} />
    </div>
  );
};

export default CalendarBlock;
