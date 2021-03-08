import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../API/users';
import { FaUserEdit } from 'react-icons/fa';
type InfoType = {
  email: string;
  password: string;
  username: string;
  nickname: string;
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

  const handleCheckEmail = () => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(info.email)) {
      return true;
    } else {
      return false;
    }
  };

  // 아이디 길이 체크
  const handleCheckId = () => {
    if (info.username.length < 5 || info.username.length > 15) {
      return false;
    } else {
      return true;
    }
  };
  // 닉네임 길이 체크
  const handleCheckNickName = () => {
    if (info.nickname.length > 3 && info.nickname.length < 10) {
      return true;
    } else {
      return false;
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
      <div>
        <FaUserEdit color='gray' className='in2' />
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='linkTo'>모든 항목은 필수입니다</div>
        <div className='inputForm2'>
          <span className='signMsg'>이메일</span>
          <input className='input'
            type="email"
            placeholder="이메일을 적어주세요"
            onChange={handleInputValue('email')}
          ></input>
          {handleCheckEmail() ? (
            <></>
          ) : (
              <div className='errMsg'>이메일 형식이 잘못되었습니다.</div>
            )}
        </div>
        <div className='inputForm2'>
          <span className='signMsg'>비밀번호</span>
          <input className='input'
            type="password"
            placeholder="비밀번호를 적어주세요"
            onChange={handleInputValue('password')}
          ></input>
        </div>
        <div className='inputForm2'>
          <span className='signMsg'>비밀번호 확인</span>
          <input className='input'
            type="password"
            placeholder="비밀번호를 다시한번 적어주세요"
            onChange={(e) => handleInputValueRePassword(e)}
          ></input>
        </div>
        {handleCheckPassword() ? (
          <div></div>
        ) : (
            <div className="checkPw inputForm2" style={{ color: 'red' }}>
              비밀번호가 맞지 않습니다.
            </div>
          )}
        <div className='inputForm2'>
          <span className='signMsg'>ID</span>
          <input className='input'
            type="text"
            placeholder="ID를 적어주세요"
            onChange={handleInputValue('username')}
          ></input>
          {handleCheckId() ? (
            <div></div>
          ) : (
              <div className='errMsg'>5자 이상 15자 이하로 작성해주세요</div>
            )}
        </div>
        <div className='inputForm2'>
          <span className='signMsg'>닉네임</span>
          <input className='input'
            type="text"
            placeholder="닉네임을 적어주세요"
            onChange={handleInputValue('nickname')}
          ></input>
          {handleCheckNickName() ? (
            <div></div>
          ) : (
              <div className='errMsg'>3자 이상 10자 이하로 작성해주세요</div>
            )}
        </div>
        <div>
          <Link to="/login" className='linkTo'>이미 아이디가 있으신가요?</Link>
        </div>
        <br />
        <button className="logBtn2 logBtn-hover2 logColor-52" type="submit" onClick={handleSignup}>
          회 원 가 입
        </button>
        <br /><br /><br />
      </form>
    </div>
  );
};

export default Signup;
