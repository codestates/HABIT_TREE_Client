import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getHabits, login } from '../API/users';
import { BsFillPersonFill } from 'react-icons/bs';
import { useHistory } from 'react-router';
import { useSampleState, useSampleDispatch } from './TodoContext';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  width: auto;
  height: auto;
  border-radius: 12px;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35296;
  letter-spacing: 0;
  background-clip: padding-box;
  padding: 0.5rem 0.8rem;
  margin-bottom: 17px;
  margin-top: 17px;
  text-align: center;
  background-color: #fff2f4;
  color: #1d1d1f;
  border: 1px solid rgba(227, 0, 0, 0.4);
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
  setHabits: (value: any) => void;
};

function Login({ habits, setHabits }: HabitsProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toggle = useSampleState();
  const dispatch = useSampleDispatch();
  const [loginFail, setLoginFail] = useState(true);
  const handleInputUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const history = useHistory();

  const userLogin = async () => {
    const result = await login(username, password);
    if (result) {
      localStorage.setItem('access_token', result);
      dispatch({ type: 'SET_TOGGLE', toggle: true });
      const habit = await getHabits();
      setLoginFail(true);
      setHabits(habit.habits);
      history.push('/home');
    } else {
      setLoginFail(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>
        <div>
          <BsFillPersonFill size="150" />
        </div>
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {!loginFail && (
          <ErrorMessage>
            Habit Tree ID 또는 암호를 올바르게 입력하지 않았습니다.
          </ErrorMessage>
        )}
        <div>
          <span>아이디</span>
          <input type="text" onChange={(e) => handleInputUsername(e)}></input>
        </div>
        <div>
          <span>비밀번호</span>
          <input
            type="password"
            style={{ fontFamily: 'sans-serif' }}
            onChange={(e) => handleInputPassword(e)}
          ></input>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-login"
            onClick={() => userLogin()}
          >
            로그인
          </button>
        </div>
        <div>
          <a href="https://habittree.gq/users/kakaoLogin">
            <button type="button" className="btn btn-kakao">
              카카오로그인
            </button>
          </a>
        </div>
        <div>
          <Link to="/signup">
            <button type="button">회원가입</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
