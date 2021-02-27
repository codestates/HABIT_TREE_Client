import React from 'react';
import { Link } from "react-router-dom";

function Main(props) {

    return (
        <div>
            <center>
                <Link to='/home'><button>시작하기</button></Link>
            </center>
        </div>
    );

}

export default Main;