import { useEffect, useState } from 'react';
import { getHabits } from '../API/users';
import Forest from '../Components/HabitForest';
import '../css/clouds.css';
import UserInfoBlock from '../Components/UserInfoBlock';
import { getForest } from '../API/forest';
import styled from 'styled-components';

const MyPageBlock = styled.div`
  margin-top: 3%;
  height: 100vh;
`;

const ForestBlock = styled.div`
  padding: 0;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  z-index: 0;
`;

type ForestType = {
  achieve: number;
  clicked: number;
  createdAt: Date;
  id: number;
  pass: number;
  title: string;
  treeType: string;
  userId: number;
};

const Mypage = () => {
  const [userInfo, setUserInfo] = useState<any>([]);
  const [forest, setForest] = useState<ForestType[]>([]);

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
    <MyPageBlock>
      <ForestBlock>
        <Forest forest={forest}></Forest>
      </ForestBlock>
      <UserInfoBlock userInfo={userInfo} forest={forest}></UserInfoBlock>
    </MyPageBlock>
  );
};

export default Mypage;
