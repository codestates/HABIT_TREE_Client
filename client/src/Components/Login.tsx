import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getHabits, login } from '../API/users';
import { BsFillPersonFill } from 'react-icons/bs';
axios.defaults.withCredentials = true;

function Login(props: any) {
  const { habits, setHabits } = props;
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
      <h1>로그인</h1>
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
        <button className="btn btn-login" onClick={() => userLogin()}>
          로그인
        </button>
        카카오로그인
        <a href="https://habittree.gq/users/kakaoLogin">
          <button className="btn btn-kakao"></button>
        </a>
        <div>
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
