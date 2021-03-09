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

  const handleWithdrawal = () => {
    return removeUser();
  };

  return (
    <>
      <div>닉네임: {userInfo.nickname}</div>
      <div>이메일: {userInfo.email}</div>
      <div className="in4">비밀번호: ******</div>
      {!isUpdate ? (
        <>
          <button
            className="logBtn2 logBtn-hover2 logColor-52"
            onClick={() => setIsUpdate(true)}
          >
            비밀번호 변경
          </button>
        </>
      ) : (
        <div>
          <input
            className="inputForm3"
            type="password"
            placeholder="변경할 비밀번호"
            onChange={(e) => handleInputPassword(e)}
          ></input>
          <input
            className="inputForm3"
            type="password"
            placeholder="변경할 비밀번호 확인"
            onChange={(e) => handleInputRePassword(e)}
          ></input>
          {handleCheckPassword() ? (
            <div>
              <button
                className="logBtn2 logBtn-hover2 logColor-52"
                onClick={() => handleClickUpdate(password)}
              >
                비밀번호 수정
              </button>
            </div>
          ) : (
            <div className="in5">
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
          </div>
        ))
      )}
      <div>{`지금까지 체득한 습관의 개수: ${forest.length}`}</div>
      <button
        className="logBtn2 logBtn-hover2 logColor-52"
        onClick={() => handleWithdrawal()}
      >
        {' '}
        회원 탈퇴{' '}
      </button>
    </>
  );
};

UserInfo.defaultProps = {
  userInfo: {
    habits: [],
  },
  forest: {},
};
export default UserInfo;
