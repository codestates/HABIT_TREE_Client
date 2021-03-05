import React, { useEffect, useState } from 'react';
import { getHabits } from '../API/users';
import Forest from './Forest';
import { CgTree } from 'react-icons/cg';
import UserInfoBlock from './UserInfoBlock';
import { getForest } from '../API/forest';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState<any>([]);
  const [forest, setForest] = useState<any>([]);

  const getUserInfo = async () => {
    return await getHabits();
  };

  const getForests = async () => {
    return await getForest();
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUserInfo([]);
        const result = await getUserInfo();
        setUserInfo(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUsers();

    const fetchForest = async () => {
      try {
        setForest([]);
        const result = await getForests();
        setForest(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchForest();
  }, []);

  return (
    <div>
      <h1>
        <CgTree size="150" />
        <br />
        마이페이지 <div> </div>
      </h1>
      <Forest forest={forest}></Forest>
      <UserInfoBlock userInfo={userInfo} forest={forest}></UserInfoBlock>
    </div>
  );
};

export default Mypage;
