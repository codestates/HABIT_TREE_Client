import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Mypage from './Components/Mypage';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import Main from './Components/Main';
import { getAllHabits } from './API/habits';
import { useSampleState, useSampleDispatch } from './Components/TodoContext';

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
const App = withRouter(({ location }: any) => {
  const [habits, setHabits] = useState<Habits[]>([]);
  const toggle = useSampleState();
  const dispatch = useSampleDispatch();

  const initialValue = useRef(habits);
  useEffect(() => {
    if (initialValue.current === habits) {
    } else {
      if (toggle.toggle) {
        async function getHabits() {
          const result = await getAllHabits();
          handleHabits(result as Habits[]);
        }
        getHabits();
      } else {
        handleHabits([]);
        return;
      }
    }
  });

  // 습관 가져오기 메소드
  const handleHabits = (value: Habits[]) => {
    initialValue.current = value;
    setHabits(value);
  };

  return (
    <>
      {location.pathname !== '/' && <Nav handleHabits={handleHabits} />}
      <Route exact path="/">
        <Main handleHabits={handleHabits}></Main>
      </Route>
      <Switch>
        <Route exact path="/home">
          <Home habits={habits} handleHabits={handleHabits} />
        </Route>
        <Route
          exact={true}
          path="/login"
          render={() => <Login habits={habits} setHabits={handleHabits} />}
        ></Route>
        <Route exact={true} path="/mypage" render={() => <Mypage />} />
        <Route exact={true} path="/signup" component={Signup} />
      </Switch>
    </>
  );
});

export default App;
