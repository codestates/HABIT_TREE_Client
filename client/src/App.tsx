import React, { useEffect, useRef, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Mypage from './Components/Mypage';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import Main from './Components/Main';
import { getAllHabits } from './API/habits';
import { LoupeTwoTone } from '@material-ui/icons';
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

function App() {
  const [isMain, setIsMain] = useState<boolean>(true);
  const [habits, setHabits] = useState<Habits[]>([]);
  const [Toggle, setToggle] = useState(false);

  const initialValue = useRef(habits);
  useEffect(() => {
    if (initialValue.current === habits) {
      console.log('첫 마운트');
    } else {
      if (Toggle) {
        console.log('Toggle');
        async function please() {
          const result = await getAllHabits();
          handleHabits(result as Habits[]);
        }
        please();
      } else {
        console.log('No Toggle');
        handleHabits([]);
        return;
      }
    }
  });

  console.log('initialValue.current');
  console.log(initialValue.current);
  // 로그인 토글
  const handleToggle = () => {
    setToggle(!Toggle);
  };

  const handleHabits = (value: Habits[]) => {
    initialValue.current = value;
    setHabits(value);
  };

  const isMainToggle = () => {
    setIsMain(!isMain);
  };

  return (
    <>
      {console.log(habits)}
      {isMain ? (
        <div>
          안녕하세요
          <Route exact path="/">
            <Main
              setIsMain={setIsMain}
              handleToggle={handleToggle}
              handleHabits={handleHabits}
            ></Main>
          </Route>
          {/* <Route path="/home">
            <Home habits={habits} isMainToggle={isMainToggle} />
          </Route> */}
        </div>
      ) : (
        <div>
          <Nav handleToggle={handleToggle} handleHabits={handleHabits} />
          <Switch>
            <Route path="/home">
              <Home habits={habits} isMainToggle={isMainToggle} />
            </Route>
            <Route
              exact={true}
              path="/login"
              render={() => (
                <Login
                  habits={habits}
                  setHabits={handleHabits}
                  handleToggle={handleToggle}
                />
              )}
            />
            <Route exact={true} path="/mypage" render={() => <Mypage />} />
            <Route exact={true} path="/signup" component={Signup} />
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
