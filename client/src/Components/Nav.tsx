import { IconButton } from '@material-ui/core';
import React from 'react';
import FingerprintOutlinedIcon from '@material-ui/icons/FingerprintOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import img from '../img/logo.png';
import MessageModal from './MessageModal';
import styled from 'styled-components';
import { CgTrees } from 'react-icons/cg';
import chitty from '../img/ChittyChittyBangBang.jpg';
Modal.setAppElement('#root');
const NavBlock = styled.div`
  // background-image: url(${chitty});
  // background-size: cover;
  background: white;
  width: 100%;
  height: 7%;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #343a40;
  box-shadow: 3px 3px 20px 3px #000000;
  position: fixed;
  top: 0px;
  z-index: 1;
`;
const NavLogo = styled.div`
  .NavLogo_Link {
    text-decoration: none;
    // color: #e9ecef;
    // color: black;

    color: #343a40;

    font-weight: bold;
    display: flex;
    align-items: center;
    div {
      font-size: 0.7rem;
    }
  }
`;

const NavIconBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5%;
  .NavIconBlock_Link {
    font-size: 0.7rem;
    margin-left: 5%;
    margin-right: 3%;
    text-decoration: none;
    color: #343a40;
    text-shadow: 2px 5px 8px #343a40;
    font-weight: bold;
  }
`;

// function Nav() {
//   const isLogin = localStorage.getItem('isLogin');

//   return (
//     <NavBlock>
//       <NavLogo>
//         <Link to="/home">
//           <img src={img} alt="logo" sizes="100" />
//         </Link>
//       </NavLogo>
//       {!isLogin ? (
//         <>
//           <MessageModal />

//           <NavIconBlock>
//             <Link className="NavIconBlock_Link" to="/mypage">
//               {/* <IconButton arai-label="myPage" color="default" size="medium" />
//               <AssignmentIndOutlinedIcon /> */}
//               MYPAGE
//             </Link>
//             <Link className="NavIconBlock_Link" to="/login">
//               {/* <IconButton
//                 arai-label="fingerPrint"
//                 color="default"
//                 size="medium"
//               />
//               <FingerprintOutlinedIcon /> */}
//               LOGIN
//             </Link>
//           </NavIconBlock>
//         </>
//       ) : (
//         <NavIconBlock>
//           <Link className="NavIconBlock_Link" to="/mypage">
//             MYPAGE
//           </Link>
//           <Link className="NavIconBlock_Link" to="/">
//             LOGOUT
//           </Link>
//         </NavIconBlock>
//       )}
//     </NavBlock>
//   );
// }

function Nav() {
  const isLogin = localStorage.getItem('isLogin');

  return (
    <NavBlock>
      <NavLogo>
        <Link className="NavLogo_Link" to="/home">
          <CgTrees size="2rem" />
          <div>습관나무</div>
        </Link>
      </NavLogo>
      {!isLogin ? (
        <>
          <MessageModal />

          <NavIconBlock>
            <Link className="NavIconBlock_Link" to="/mypage">
              {/* <IconButton arai-label="myPage" color="default" size="medium" />
              <AssignmentIndOutlinedIcon /> */}
              MYPAGE
            </Link>
            <Link className="NavIconBlock_Link" to="/login">
              {/* <IconButton
                arai-label="fingerPrint"
                color="default"
                size="medium"
              />
              <FingerprintOutlinedIcon /> */}
              LOGIN
            </Link>
          </NavIconBlock>
        </>
      ) : (
        <NavIconBlock>
          <Link className="NavIconBlock_Link" to="/mypage">
            MYPAGE
          </Link>
          <Link className="NavIconBlock_Link" to="/">
            LOGOUT
          </Link>
        </NavIconBlock>
      )}
    </NavBlock>
  );
}

export default Nav;
