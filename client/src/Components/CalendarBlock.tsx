import { useState } from 'react';
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

const CalendarBlock = ({ habits, setHabits }: any) => {
  const [events, setEvents] = useState(habits);

  return (
    <Container>
      <UploadHabit events={events} setEvents={setEvents} />
      <ReactCalendar events={events} setEvents={setEvents} />
    </Container>
  );
};

export default CalendarBlock;
