import React from 'react';
import { CgTrees } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import MessageModal from './MessageModal';
import '../css/Nav.css';
//import Forest from './video/Forest.mp4';
Modal.setAppElement('#root');

function Nav() {
  const isLogin = localStorage.getItem('isLogin');

  return (
    <div className='header'>
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '200%',
          left: '50%,',
          top: '0%',
          height: '25%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1',
        }}
      >
        <source src={Forest} type="video/mp4" />
      </video> */}
      <div className='logo'>&nbsp;&nbsp;<Link to="/home" style={{ textDecoration: 'none', color: 'grey' }} > <CgTrees size='60' className='logoHover' /></Link><br />&nbsp;&nbsp;&nbsp;습관나무</div>
      {!isLogin ? (
        <>
          <MessageModal />
          <div className='liName'>
            <Link to="/mypage" style={{ textDecoration: 'none', color: 'grey' }}>
              <a>마이페이지</a>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/login" style={{ textDecoration: 'none', color: 'grey' }}>
              <a>로그인</a>
            </Link>
          </div>
        </>
      ) : (
          <div></div>
        )}
    </div>
  );
}

export default Nav;
