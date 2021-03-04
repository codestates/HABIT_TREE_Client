import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../API/users';
import { BsFillPersonPlusFill } from 'react-icons/bs';
type InfoType = {
  email?: string | null | undefined;
  password?: string | null | undefined;
  username?: string | null | undefined;
  nickname?: string | null | undefined;
};

const Signup = () => {
  const [info, setInfo] = useState<InfoType>({
    email: '',
    password: '',
    username: '',
    nickname: '',
  });
  const [rePassword, setRePassword] = useState('');

  useEffect(() => {
    handleCheckPassword();
  });

  const handleInputValue = (
    key: 'email' | 'password' | 'username' | 'nickname'
  ) => (e: ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [key]: e.target.value });
  };

  const handleInputValueRePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.target.value);
  };

  const handleCheckPassword = () => {
    if (info.password !== rePassword) {
      return false;
    } else {
      return true;
    }
  };

  const handleSignup = () => {
    const { username, password, email, nickname } = info;
    const result = signUp(username, password, email, nickname);
    if (result) {
    }
  };

  return (
    <div>
      <h1>
        <div>
          <BsFillPersonPlusFill size="150" />
        </div>
        회원가입
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>모든 항목은 필수입니다</div>
        <div>
          <span>이메일</span>
          <input
            type="email"
            placeholder="이메일을 적어주세요"
            onChange={handleInputValue('email')}
          ></input>
        </div>
        <div>
          <span>비밀번호</span>
          <input
            type="password"
            style={{ fontFamily: 'sans-serif' }}
            placeholder="비밀번호를 적어주세요"
            onChange={handleInputValue('password')}
          ></input>
        </div>
        <div>
          <span>비밀번호 확인</span>
          <input
            type="password"
            style={{ fontFamily: 'sans-serif' }}
            placeholder="비밀번호를 다시한번 적어주세요"
            onChange={(e) => handleInputValueRePassword(e)}
          ></input>
        </div>
        {handleCheckPassword() ? (
          <div></div>
        ) : (
          <div className="checkPw" style={{ color: 'red' }}>
            비밀번호가 맞지 않습니다.
          </div>
        )}
        <div>
          <span>이름</span>
          <input
            type="text"
            placeholder="ID를 적어주세요"
            onChange={handleInputValue('username')}
          ></input>
        </div>
        <div>
          <span>닉네임</span>
          <input
            type="text"
            placeholder="닉네임을 적어주세요"
            onChange={handleInputValue('nickname')}
          ></input>
        </div>
        <div>
          <Link to="/login">이미 아이디가 있으신가요?</Link>
        </div>
        <button className="btn btn-signup" type="submit" onClick={handleSignup}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
