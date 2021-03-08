import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/msgModal.css';
function MessageModal() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    setShowMenu(true);
    document.addEventListener('click', closeMenu);
  }, []);

  return (
    <>
      {showMenu ? (
        <div className="messageModal_content">
          로그인을 하지 않을 경우
          <br /><br />
          저장되지 않습니다.
          <Link to="/signup">
            <button className="buttons btn-hover color-5">회원가입</button>
          </Link>
        </div>
      ) : null}
    </>
  );
}

export default MessageModal;
