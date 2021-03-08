import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getHabits, login } from '../API/users';
import { FaUserCheck } from 'react-icons/fa';
//import { Height } from '@material-ui/icons';
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
        <div className='out'>
          <br /><br /><br />
          <FaUserCheck className='in' color='grey' />
          <form onSubmit={(e) => e.preventDefault()}>
            {/* <img src={Trees} style={{
              position: 'absolute',
              width: '120%',
              left: '50%,',
              top: '50%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              zIndex: -1,
            }} /> */}
            <div className='inputForm'>
              <span>아이디</span>
              <input className='input' type="text" onChange={(e) => handleInputUsername(e)}></input>
            </div>
            <div className='inputForm'>
              <span>비밀번호</span>
              <input className='input'
                type="password"
                onChange={(e) => handleInputPassword(e)}
              ></input>
            </div>

            <button
              type="submit"
              className="logBtn logBtn-hover logColor-5"
              onClick={() => userLogin()}
            >
              로 그 인
          </button>
            <a href="https://habittree.gq/users/kakaoLogin">
              <button type="button" className="logBtn logBtn-hover logColor-5">
                카 카 오 로 그 인
            </button>
            </a>
            <Link to="/signup">
              <button type="button" className="logBtn logBtn-hover logColor-5">회 원 가 입</button>
            </Link>
          </form>
        </div>
      </h1>
    </div>
  );
}

export default Login;
