import { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Mypage from './Components/Mypage';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import Main from './Components/Main';

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

  const handleHabits = useCallback((value: Habits[]) => setHabits(value), []);
  const handleMain = useCallback(() => setIsMain(!isMain), [isMain]);
  return (
    <>
      {isMain ? (
        <div>
          <Route exact path="/">
            <Main setIsMain={handleMain}></Main>
          </Route>
        </div>
      ) : (
        <div>
          <Nav />
          <Switch>
            <Route exact={true} path="/home">
              <Home habits={habits} setHabits={handleHabits} />
            </Route>
            <Route
              exact={true}
              path="/login"
              render={() => <Login habits={habits} setHabits={handleHabits} />}
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
