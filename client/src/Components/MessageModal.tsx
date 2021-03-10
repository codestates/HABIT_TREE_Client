import { Link } from 'react-router-dom';
import '../css/msgModal.css';
import { useSampleState } from './LoginToggleContext';

function MessageModal() {
  const toggle = useSampleState();

  // const closeMenu = () => {
  //   setShowMenu(false);
  // };
  // useEffect(() => {
  //   setShowMenu(true);
  //   document.addEventListener('click', closeMenu);
  // }, []);

  return (
    <>
      {!toggle.toggle ? (
        <div className="messageModal">
          <div className="messageModal_content">
            로그인을 하지 않을 경우
            <br />
            <br />
            저장되지 않습니다.
            <Link to="/signup">
              <button className="buttons btn-hover color-5">회원가입</button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default MessageModal;
