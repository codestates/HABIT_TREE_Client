import { IconButton } from '@material-ui/core';
import React from 'react';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import img from '../img/logo.png';
import MessageModal from './MessageModal';
import { useHistory } from 'react-router';
Modal.setAppElement('#root');

function Nav() {
  const isLogin = localStorage.getItem('isLogin');
  const history = useHistory();
  const handleIsLogin = () => {
    localStorage.setItem('isLogin', String(false));
    localStorage.removeItem('access_token');
    history.push('/home');
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link to="/home">
          <img src={img} alt="logo" sizes="100" />
        </Link>
      </div>
      {isLogin === 'false' ? (
        <>
          <MessageModal />

          <div
            className="Nav-right"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Link to="/mypage">
              <IconButton arai-label="myPage" color="default" size="medium" />
              <AssignmentIndOutlinedIcon />
            </Link>
            <Link to="/login">
              <IconButton
                arai-label="fingerPrint"
                color="default"
                size="medium"
              />
              <FingerprintOutlinedIcon />
            </Link>
          </div>
        </>
      ) : (
        <div
          className="Nav-right"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Link to="/mypage">
            <IconButton arai-label="myPage" color="default" size="medium" />
            <AssignmentIndOutlinedIcon />
          </Link>
          <button type="button" onClick={() => handleIsLogin()}>
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}

export default Nav;
