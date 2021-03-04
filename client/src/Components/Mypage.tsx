import React, { useEffect, useState } from 'react';
import { getHabits } from '../API/users';
import Forest from './Forest';
import { CgTree } from 'react-icons/cg';
import UserInfoBlock from './UserInfoBlock';
import { getForest } from '../API/forest';
import styled from 'styled-components';
import nature from '../img/nature.jpg';
const MyPageBlock = styled.div`
  margin-top: 4%;

  height: 80vh;
`;

const ForestBlock = styled.div`
  padding: 0;
  padding: 5%;
  height: 60vh;
  background-image: url(${nature});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  z-index: 0;
`;

const Mypage = ({ habits, setHabits }: any) => {
  const [userInfo, setUserInfo] = useState<any>([]);
  const [forest, setForest] = useState<any>([]);

  const getUserInfo = () => {
    return getHabits();
  };

  const getForests = () => {
    return getForest();
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUserInfo([]);
        const result = getUserInfo();
        setUserInfo(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();

    const fetchForest = async () => {
      try {
        setForest([]);
        const result = getForests();
        setForest(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchForest();
  }, []);

  return (
    <MyPageBlock>
      <ForestBlock>
        <CgTree className="cgTree" size="150" />
        <Forest forest={forest}></Forest>
      </ForestBlock>

      <UserInfoBlock userInfo={userInfo} forest={forest}></UserInfoBlock>
    </MyPageBlock>
  );
};

export default Mypage;
