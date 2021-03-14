import { useEffect, useRef, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import '../css/App.css';
import Home from './Home';
import Login from '../Components/UserSignin';
import Mypage from './Mypage';
import Nav from '../Components/Navbar';
import Signup from '../Components/UserSignup';
import Main from './Main';
import { getAllHabits } from '../API/habits';
import { useSampleState, useSampleDispatch } from '../Store/LoginToggleContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  // 로그인 후 새로고침 시 로그인 유지
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const token = localStorage.getItem('access_token');
    if (token) {
      dispatch({ type: 'SET_TOGGLE', toggle: true });
      async function getHabits() {
        const result = await getAllHabits();
        handleHabits(result as Habits[]);
      }
      getHabits();
    } else {
      return;
    }
  }, []);

  // 로그인한 경우 습관 가져오기 ,무한 렌더링 방지
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
