import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getHabits, login } from '../API/users';
import { BsFillPersonFill } from 'react-icons/bs';

axios.defaults.withCredentials = true;

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

  const handleInputUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const userLogin = async () => {
    const result = await login(username, password);
    if (result) {
      localStorage.setItem('isLogin', JSON.stringify(true));
      localStorage.setItem('access_token', String(result));
      const habit = getHabits();
      setHabits(habit);
    } else {
      throw new Error('Not Authorized!');
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
