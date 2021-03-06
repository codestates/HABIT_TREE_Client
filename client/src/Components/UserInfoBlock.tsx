import UserInfo from './UserInfo';

const UserInfoBlock = ({ userInfo, forest }: any) => {
  return (
    <div>
      <UserInfo userInfo={userInfo} forest={forest} />
    </div>
  );
};

export default UserInfoBlock;
