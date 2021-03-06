import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import img from '../img/logo.png';
import MessageModal from './MessageModal';
import { useHistory } from 'react-router';

Modal.setAppElement('#root');
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

type Props = {
  handleToggle: () => void;
  handleHabits: (value: Habits[]) => void;
};
function Nav({ handleToggle, handleHabits }: Props) {
  const isLogin = localStorage.getItem('isLogin');
  const history = useHistory();
  const handleIsLogin = () => {
    localStorage.setItem('isLogin', String(false));
    localStorage.removeItem('access_token');
    handleToggle();
    handleHabits([]);
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
