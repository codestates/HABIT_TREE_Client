import React, { useEffect, useState } from "react";
import "../css/msgModal.css";
function MessageModal() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    setShowMenu(true);
    document.addEventListener("click", closeMenu);
  }, []);
  return (
    <div className="messageModal">
      {showMenu ? (
        <div className="messageModal_content">
          비 로그인 시 <br />
          저장되지 않습니다.
          <button className="styledButton">SIGN UP</button>
        </div>
      ) : null}
    </div>
  );
}

export default MessageModal;
