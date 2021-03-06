import { useCallback, useEffect, useState } from 'react';
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
  const [events, setEvents] = useState<Events[]>([]);
  const handleEvents = useCallback((value: Events[]) => setEvents(value), []);

  if (habits.length === 0) {
    handleEvents([]);
  } else {
    const result = habits.map((habit) => {
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
    handleEvents(result);
  }

  return (
    <div>
      <UploadHabit events={events} setEvents={handleEvents} />
      <ReactCalendar events={events} setEvents={handleEvents} />
    </div>
  );
};

export default CalendarBlock;
