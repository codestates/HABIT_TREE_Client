import { useState } from 'react';
import { removeHabit } from '../API/habits';
import { removeUser, updateUser } from '../API/users';

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

  const handleClickDelete = (id: number) => {
    return removeHabit(id);
  };

  const handleWithdrawal = () => {
    return removeUser();
  };

  return (
    <div>
      <div>{userInfo.nickname}</div>
      <div>{userInfo.email}</div>
      {!isUpdate ? (
        <div>
          <div>******</div>
          <span>
            <button onClick={() => setIsUpdate(true)}> 비밀번호 변경 </button>
          </span>
        </div>
      ) : (
        <div>
          <input
            type="password"
            placeholder="변경할 비밀번호"
            onChange={(e) => handleInputPassword(e)}
          ></input>
          <input
            type="password"
            placeholder="변경할 비밀번호 확인"
            onChange={(e) => handleInputRePassword(e)}
          ></input>
          {handleCheckPassword() ? (
            <div>
              <button onClick={() => handleClickUpdate(password)}>
                비밀번호 수정
              </button>
            </div>
          ) : (
            <div className="checkPw">
              길이가 5자 미만이거나 비밀번호가 맞지 않습니다.
            </div>
          )}
        </div>
      )}
      {!habits ? (
        <div>아직 등록한 습관이 없으시군요!</div>
      ) : (
        habits.map((habit: any) => (
          <div>
            {`${habit.title} 습관의 달성률은 ${habit.achieve} % 입니다`}
            <span>
              <button onClick={() => handleClickDelete(habit.id)}>
                습관 삭제
              </button>
            </span>
          </div>
        ))
      )}
      <div>{`지금까지 체득한 습관의 개수: ${forest.length}`}</div>
      <button onClick={() => handleWithdrawal()}> 회원 탈퇴 </button>
    </div>
  );
};

UserInfo.defaultProps = {
  userInfo: {
    habits: [],
  },
  forest: {},
};
export default UserInfo;
