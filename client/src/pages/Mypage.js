import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

axios.defaults.withCredentials = true;

function Mypage(props) {
  const { userinfo, handleLogout } = props;

  return userinfo ? (
    <div>
      <h1>마이페이지</h1>
      <div className="username">{userinfo.username}</div>
      <div className="email">{userinfo.email}</div>
      <div className="mobile">{userinfo.mobile}</div>

      <button className="btn btn-logout" onClick={handleLogout}>
        로그아웃
      </button>
      <Link to="/home">
        <button>홈</button>
      </Link>
    </div>
  ) : (
    ''
  );
}

export default Mypage;
