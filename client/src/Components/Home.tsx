import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CalendarBlock from './CalendarBlock';
import TreeBlock from './TreeBlock';

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
    <div
      style={{
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '50%',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <CalendarBlock
          habits={habits}
          handleHabits={handleHabits}
          percent={percent}
          handlePercent={handlePercent}
        ></CalendarBlock>
      </div>
      <div
        style={{
          height: '100vh',
          width: '50%',
          justifyContent: 'center',
        }}
      >
        <TreeBlock percent={percent}></TreeBlock>
      </div>
    </div>
  );
}

export default Home;
