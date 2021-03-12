import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgTrees } from 'react-icons/cg';
import Forest from './video/Forest.mp4';
import { useHistory } from 'react-router';
import { getAllHabits } from '../API/habits';
import { useSampleDispatch } from './LoginToggleContext';

function Main(props) {
  const history = useHistory();
  const url = new URL(window.location.href);
  const token = url.search.substr(14);
  const dispatch = useSampleDispatch();

  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', String(token));
      dispatch({ type: 'SET_TOGGLE', toggle: true });
      async function getHabits() {
        const result = await getAllHabits();
        if (result) {
          props.handleHabits(result);
        }
      }
      getHabits();
      history.push('/home');
    }
  }, []);

  return (
    <center>
      {token ? (
        <> </>
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <h1 className="main">
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link
            style={{ textDecoration: 'none', color: 'white', fontSize: '2rem' }}
            to="/home"
          >
            시작하기
          </Link>
          <br />
          <br />
        </div>
      )}
    </center>
  );
}

export default Main;
