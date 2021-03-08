import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import img from '../img/logo.png';
import MessageModal from './MessageModal';
import { useHistory } from 'react-router';
import { useSampleState, useSampleDispatch } from './TodoContext';
import '../css/Nav.css';
import styled from 'styled-components';
import { CgTrees } from 'react-icons/cg';

const NavBlock = styled.div`
  background: white;
  width: 100%;
  height: 7%;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #343a40;
  box-shadow: 3px 3px 20px 3px #000000;
  position: fixed;
  top: 0px;
  z-index: 1;
`;
const NavLogo = styled.div`
  margin-left: 3%;

  .NavLogo_Link {
    text-decoration: none;
    // color: #e9ecef;
    // color: black;
    padding: 5% 0%;
    color: #343a40;
    font-weight: bold;
    display: flex;
    align-items: center;
    div {
      font-size: 1.8rem;
    }

    &:hover {
      color: green;
    }
  }
`;

const NavIconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  .NavIconBlock_Link {
    font-size: 1.3rem;
    margin-left: 5%;
    margin-right: 3%;
    text-decoration: none;
    color: #343a40;
    text-shadow: 2px 5px 8px #343a40;
    font-weight: bold;
    padding: 10px 10px;
    &:hover {
      color: green;
    }
  }
`;
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
  handleHabits: (value: Habits[]) => void;
};
function Nav({ handleHabits }: Props) {
  const history = useHistory();
  const toggle = useSampleState();
  const dispatch = useSampleDispatch();

  const handleIsLogin = () => {
    localStorage.removeItem('access_token');
    dispatch({ type: 'SET_TOGGLE', toggle: false });
    handleHabits([]);
    history.push('/home');
  };
  return (
    <NavBlock>
      <NavLogo>
        <Link className="NavLogo_Link" to="/home">
          <CgTrees size="2.5rem" />
          <div>습관나무</div>
        </Link>
      </NavLogo>
      {!toggle.toggle ? (
        <NavIconBlock>
          <Link className="NavIconBlock_Link" to="/mypage">
            MYPAGE
          </Link>
          <Link className="NavIconBlock_Link" to="/login">
            LOGIN
          </Link>
        </NavIconBlock>
      ) : (
        <NavIconBlock>
          <Link className="NavIconBlock_Link" to="/mypage">
            MYPAGE
          </Link>
          <Link
            className="NavIconBlock_Link"
            to="/"
            onClick={() => handleIsLogin()}
          >
            LOGOUT
          </Link>
        </NavIconBlock>
      )}
    </NavBlock>
  );
}

export default Nav;
