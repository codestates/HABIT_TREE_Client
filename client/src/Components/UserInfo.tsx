import { useState } from 'react';
import { removeUser, updateUser } from '../API/users';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #2b8a3e;
  font-weight: bold;
  background-color: #eff5e0;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const ContainerUserInfo = styled.div`
  div {
    margin: 10px 0px;
  }

  display: flex;
  flex-direction: column;
`;

const ContainerHabits = styled.div`
  div {
    font-size: 1.5rem;
    margin: 20px 0px;

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
      text-align: left;
    }
  }
`;

const InputForm = styled.input.attrs({
  type: 'password',
  placeholder: '변경할 비밀번호',
})`
  border-bottom: solid 3px black;
  text-align: left;
  font-size: 20px;
  border: none;
  background: none;
  ::placeholder {
    font-family: Source Sans Pro;
  }
`;

const In4Div = styled.div`
  display: inline-block;
`;

const In5Div = styled.div`
  display: inline-block;
  font-size: 20px;
  color: lightgray;
`;

const Button = styled.button`
  margin-top: 150px;
  width: 50%;
  width: 100%;
  height: 30px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 5px;
  margin: 10px 0px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #0ba360,
    #3cba92,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);

  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

const Div = styled.div``;
const UserInfo = ({ userInfo, forest }: any) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const habits = userInfo.habits;

  const handleClickUpdate = (password: string) => {
    return updateUser(password);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleInputRePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepassword(event.target.value);
  };

  const handleCheckPassword = () => {
    if (password !== repassword || password.length < 5) {
      return false;
    } else {
      return true;
    }
  };

  const handleWithdrawal = () => {
    return removeUser();
  };

  return (
    <Container data-aos="fade-left" data-aos-offset="400">
      <ContainerUserInfo>
        <Div>닉네임: {userInfo.nickname}</Div>
        <Div>이메일: {userInfo.email}</Div>
        <In4Div>비밀번호: ******</In4Div>
        {!isUpdate ? (
          <Button onClick={() => setIsUpdate(true)}>비밀번호 변경</Button>
        ) : (
          <>
            <Div>
              <InputForm onChange={(e) => handleInputPassword(e)}></InputForm>
            </Div>
            <Div>
              <InputForm onChange={(e) => handleInputRePassword(e)}></InputForm>
            </Div>
            {handleCheckPassword() ? (
              <Button onClick={() => handleClickUpdate(password)}>
                비밀번호 수정
              </Button>
            ) : (
              <In5Div>길이가 5자 미만이거나 비밀번호가 맞지 않습니다.</In5Div>
            )}
          </>
        )}
        <Button onClick={() => handleWithdrawal()}>회원 탈퇴</Button>
      </ContainerUserInfo>
      <ContainerHabits>
        {!habits ? (
          <Div>아직 등록한 습관이 없으시군요!</Div>
        ) : (
          habits.map((habit: any) => (
            <Div>
              {`${habit.title} 습관의 달성률은 ${habit.achieve} % 입니다`}
            </Div>
          ))
        )}
        <Div>{`지금까지 체득한 습관의 개수: ${forest.length}`}</Div>
      </ContainerHabits>
    </Container>
  );
};

UserInfo.defaultProps = {
  userInfo: {
    habits: [],
  },
  forest: {},
};
export default UserInfo;
