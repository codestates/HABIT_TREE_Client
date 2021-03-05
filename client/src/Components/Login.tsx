import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getHabits, login } from '../API/users';
import { BsFillPersonFill } from 'react-icons/bs';
import styled from 'styled-components';
import img from '../img/forest1.jpeg';
import { CgTrees } from 'react-icons/cg';
import { GiBurningTree } from 'react-icons/gi';
import { GiForestCamp } from 'react-icons/gi';
import { GiForest } from 'react-icons/gi';
import { TiLeaf } from 'react-icons/ti';
import { DiOpensource } from 'react-icons/di';
import { FcConferenceCall } from 'react-icons/fc';
import { FiUserCheck } from 'react-icons/fi';
import { FaWalking } from 'react-icons/fa';
import chitty from '../img/ChittyChittyBangBang.jpg';
axios.defaults.withCredentials = true;

const LoginBlock = styled.div`
  opacity: 0.8;
  border: none;

  box-shadow: 5px 5px 15px 5px #000000;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url(${chitty});
  background-repeat: no-repeat;
  background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
  background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다.

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mainText {
    margin-bottom: 30%;
    font-size: 36px;
    color: #f8f9fa;
  }

  a {
    text-decoration: none;
  }
  .signup {
    font-size: 20px;
    color: white;
    border: none;
    background-color: transparent;
  }
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #f8f9fa;
  margin: 20px 30px;
  input {
    border: none;
    border-bottom: 4px solid #ced4da;
    border-radius: 3px;
    background-color: transparent;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

const StyleButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0px 10px;
  margin-left: 10px;
  /* 크기 */
  height: 1.1rem;
  font-size: 1rem;

  /* 색상 */
  background-color: transparent;

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;
const InputIdBlock = styled.input``;
const InputPasswordBlock = styled.input`
  font-family: sans-serif;
`;
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
    <div style={{ background: '#495057' }}>
      <LoginBlock>
        <form onSubmit={(e) => e.preventDefault()}>
          <FaWalking className="mainText" size="150" />

          <InputForm>
            ID
            {/* <input type="text" onChange={(e) => handleInputUsername(e)}></input> */}
            <InputIdBlock
              type="text"
              onChange={(e) => handleInputUsername(e)}
            />
            PW
            <InputPasswordBlock
              type="password"
              onChange={(e) => handleInputPassword(e)}
            />
          </InputForm>
          <div>
            <StyleButton type="submit" onClick={() => userLogin()}>
              로그인
            </StyleButton>
            <a href="https://habittree.gq/users/kakaoLogin">
              <StyleButton type="button">KAKAO</StyleButton>
            </a>
          </div>
        </form>
        <div>
          <Link to="/signup">
            <button className="signup" type="button">
              회원가입
            </button>
          </Link>
        </div>
      </LoginBlock>
    </div>
  );
}

export default Login;
