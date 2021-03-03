import React, { useState } from 'react';
// import "../App.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { login } from '../API/users';
import { BsFillPersonFill } from 'react-icons/bs';
axios.defaults.withCredentials = true;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const userLogin = () => {
    const result = login(username, password);
    if (result) {
      localStorage.setItem('isLogin', JSON.stringify(true));
      localStorage.setItem('access_token', String(result));
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
          {' '}
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
            onChange={(e) => handleInputPassword(e)}
          ></input>
        </div>
        <div>
          <Link to="/signup">아직 아이디가 없으신가요?</Link>
        </div>
        <button
          className="btn btn-login"
          type="submit"
          onClick={() => userLogin()}
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
