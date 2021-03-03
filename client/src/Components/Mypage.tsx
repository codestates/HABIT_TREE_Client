import React, { useEffect, useState } from 'react';
import { getUser } from '../API/users';
import Forest from './Forest';
import UserInfo from './UserInfo';
import { CgTree } from 'react-icons/cg';

const Mypage = () => {
  const [userInfo, setUserInfo] = useState<any>([]);

  const getUserInfo = () => {
    const token = localStorage.getItem('access_token');
    return getUser(token);
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
  }, []);

  return (
    <div>
      <h1>
        <CgTree size="150" />
        <br />
        마이페이지 <div> </div>
      </h1>
      <Forest></Forest>
      <UserInfo userInfo={userInfo}> </UserInfo>
    </div>
  );
};

export default Mypage;
