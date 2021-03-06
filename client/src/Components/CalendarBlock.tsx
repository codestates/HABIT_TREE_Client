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
};

type Events = {
  id: number | null;
  title: string | null;
  allday: boolean | null;
  start: Date | null;
  end: number | null;
}[];

const CalendarBlock = ({ habits }: HabitsProps) => {
  console.log(habits);

  // const [events, setEvents] = useState([{
  //   id: 0,
  //   title: '',
  //   allday: true,
  //   start: new Date(),
  //   end: new Date(),
  // }]);
  // const handleEvent = (value: Events[]) => {
  //   setEvents(value);
  // };

  // useEffect(() => {
  //   handleEvent(events);
  // }, []);
  // console.log('habits');
  // console.log(habits);
  // if (habits.length === 0) {
  //   setEvents(events.concat(habits));

  // } else {
  //   const result: Events[] = habits.map((habit) => {
  //     return {
  //       id: habit.id,
  //       title: habit.title,
  //       allday: true,
  //       start: habit.createdAt,
  //       end: new Date(habit.createdAt).setDate(
  //         new Date(habit.createdAt).getDate() + 27
  //       ),
  //     };
  //   });

  //! setEvents(result);

  return (
    <div>
      <UploadHabit habits={habits} />
      <ReactCalendar habits={habits} />
    </div>
  );
};

export default CalendarBlock;
