import React from 'react';
import { Link } from 'react-router-dom';
import { CgTrees } from 'react-icons/cg';
import Forest from './video/Forest.mp4';

function Main(props) {
  return (
    <center>
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
        <div className="main">
          <CgTrees size="140" />
          <br />
            습관나무
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
        <br />
        <br />
        <br />
        <br />
        <Link to="/home">
          <button
            className="btn main"
            onClick={() => props.setIsMain(false)}
          >
            시작하기
          </button>
        </Link>
      </div>
    </center>
  );
}

export default Main;
