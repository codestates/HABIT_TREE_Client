import UserInfo from './UserInfo';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 8px 0;
  }
`;
const UserInfoBlock = ({ userInfo, forest }: any) => {
  return (
    <Container>
      <UserInfo userInfo={userInfo} forest={forest} />
    </Container>
  );
};

export default UserInfoBlock;
