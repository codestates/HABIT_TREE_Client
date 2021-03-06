import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgTrees } from 'react-icons/cg';
import Forest from './video/Forest.mp4';
import { useHistory } from 'react-router';
import { getAllHabits } from '../API/habits';
function Main(props) {
  const history = useHistory();
  const url = new URL(window.location.href);
  const token = url.search.substr(14);

  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', String(token));
      localStorage.setItem('isLogin', String(true));
      props.setIsMain(false);
      props.handleToggle();
      async function please() {
        const result = await getAllHabits();
        props.handleHabits(result);
      }
      please();
      history.push('/home');
    }
  }, []);
  // render -> useEffect
  return (
    <center>
      {token ? (
        <></>
      ) : (
        <div>
          <video
            autoPlay
            loop
            muted
            style={{
              position: 'absolute',
              width: '100%',
              left: '50%,',
              top: '50%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              zIndex: '-1',
            }}
          >
            <source src={Forest} type="video/mp4" />
          </video>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <h1 className="mainText">
              <CgTrees size="150" />
              <br />
              습관나무
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to="/home">
            <button
              className="btn mainText"
              onClick={() => props.setIsMain(false)}
            >
              시작하기
            </button>
          </Link>
        </div>
      )}
    </center>
  );
}

export default Main;
