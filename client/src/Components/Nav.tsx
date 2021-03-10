import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useHistory } from 'react-router';
import { useSampleState, useSampleDispatch } from './LoginToggleContext';
import '../css/Nav.css';
import styled from 'styled-components';
import { CgTrees } from 'react-icons/cg';

const NavBlock = styled.div`
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
  @media only screen and (max-width: 768px) {
    height: 5%;
  }
`;
const NavLogo = styled.div`
  margin-left: 3%;

  .NavLogo_Link {
    text-decoration: none;
    padding: 5% 0%;
    color: #343a40;
    font-weight: 900;
    display: flex;
    align-items: center;
    div {
      font-size: 1.8rem;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    .CgTrees {
      font-size: 2.5rem;
      @media only screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }

    &:hover {
      transition: color 0.2s ease-in-out;
      color: #0ba360;
    }
  }
`;

const NavIconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  .NavIconBlock_Link {
    font-size: 1.3rem;

    margin-right: 7%;
    text-decoration: none;
    color: #343a40;
    text-shadow: 2px 5px 8px #343a40;
    font-weight: bold;
    padding: 10px 10px;
  }
  .NavIconBlock_Link.MyPage {
    &:hover:before {
      transition: color 0.2s ease-in-out;
      color: #0ba360;
      content: 'MYPAGE';
    }
    &:before {
      content: '마이페이지';
    }

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
  .NavIconBlock_Link.LoginToggle {
    &:hover:before {
      transition: color 0.2s ease-in-out;
      color: #0ba360;
      content: 'LOGIN';
    }
    &:before {
      content: '로그인';
    }
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .NavIconBlock_Link.LogoutToggle {
    &:hover:before {
      transition: color 0.2s ease-in-out;
      color: #0ba360;
      content: 'LOGOUT';
    }
    &:before {
      content: '로그아웃';
    }

    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;
Modal.setAppElement('#root');
type Habits = {
  id: number;
  title: string;
  pass: number;
  clicked: number;
  achieve: number;
  treeType: string;
  userId: number;
  createdAt: Date;
};

type Props = {
  handleHabits: (value: Habits[]) => void;
};
function Nav({ handleHabits }: Props) {
  const history = useHistory();
  const toggle = useSampleState();
  const dispatch = useSampleDispatch();

  const handleIsLogin = () => {
    localStorage.removeItem('access_token');
    dispatch({ type: 'SET_TOGGLE', toggle: false });
    handleHabits([]);
    history.push('/home');
  };
  return (
    <NavBlock>
      <NavLogo>
        <Link className="NavLogo_Link" to="/home">
          <CgTrees className="CgTrees" />
          <div>습관나무</div>
        </Link>
      </NavLogo>
      {!toggle.toggle ? (
        <>
          <NavIconBlock>
            <Link className="NavIconBlock_Link MyPage" to="/login"></Link>
            <Link className="NavIconBlock_Link LoginToggle" to="/login"></Link>
          </NavIconBlock>
        </>
      ) : (
        <NavIconBlock>
          <Link className="NavIconBlock_Link MyPage" to="/mypage"></Link>
          <Link
            className="NavIconBlock_Link LogoutToggle"
            to="/"
            onClick={() => handleIsLogin()}
          ></Link>
        </NavIconBlock>
      )}
    </NavBlock>
  );
}

export default Nav;
