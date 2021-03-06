import React from 'react';
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
  isMainToggle: () => void;
};

function Home({ habits, isMainToggle }: HabitsProps) {
  const url = new URL(window.location.href);
  const token = url.search.substr(14);

  console.log(habits);
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
        <CalendarBlock habits={habits}></CalendarBlock>
      </div>
      <div
        style={{
          height: '100vh',
          width: '50%',
          justifyContent: 'center',
        }}
      >
        <TreeBlock></TreeBlock>
      </div>
    </div>
  );
}

export default Home;
