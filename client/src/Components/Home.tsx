import { useState } from 'react';
import CalendarBlock from './CalendarBlock';
import TreeBlock from './TreeBlock';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    display: initial;
  }
`;

const Components = styled.div`
  display: flex;
  height: 100vh;
  width: 50%;
  justifycontent: center;
  @media only screen and (max-width: 768px) {
    margin-top: 55px;
    height: 50%;
    width: 100%;
  }
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

type Obj = {
  [k: number]: number;
};

function Home({ habits, handleHabits }: HabitsProps) {
  const [percent, setPercent] = useState<any>({});

  const handlePercent = (value: Obj) => {
    setPercent(value);
  };
  return (
    <Container>
      <Components>
        <CalendarBlock
          habits={habits}
          handleHabits={handleHabits}
          percent={percent}
          handlePercent={handlePercent}
        ></CalendarBlock>
      </Components>
      <Components>
        <TreeBlock percent={percent}></TreeBlock>
      </Components>
    </Container>
  );
}

export default Home;
