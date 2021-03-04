import UserInfo from './UserInfo';
import styled from 'styled-components';
import chitty from '../img/ChittyChittyBangBang.jpg';
const Block = styled.div`
  padding: 0 3%;
  background: #212529;
  color: white;
  border: 1px solid black;

  height: 30vh;

  background-image: url(${chitty});
  background-repeat: no-repeat;
  background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
  background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다.
`;

const UserInfoBlock = (props: any) => {
  return (
    <Block>
      <UserInfo props={props} />
    </Block>
  );
};

export default UserInfoBlock;
