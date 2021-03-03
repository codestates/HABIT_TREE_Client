import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import { Checkbox } from '@material-ui/core';


const customStyles = {
    content: {
        top: '30%', left: '27%', right: '50%', bottom: 'auto'
    }
};
Modal.setAppElement('#root')

function Home() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const sumChecked1 = (e) => {
        let data = name;
        let trueValue = e.target.checked;

        if (trueValue === true) {
            data.push(e.target.value)
        }
        let sum = data.map(Number).reduce((a, b) => a + b);
        console.log(Math.round(sum) + '%(1)');
    }

    const sumChecked2 = (e) => {
        let data2 = name2;
        let trueValue = e.target.checked;

        if (trueValue === true) {
            data2.push(e.target.value)
        }
        let sum2 = data2.map(Number).reduce((a, b) => a + b);
        console.log(Math.round(sum2) + '%(2)');
    }


    const sumChecked3 = (e) => {
        let data3 = name3;
        let trueValue = e.target.checked;

        if (trueValue === true) {
            data3.push(e.target.value)
        }
        let sum3 = data3.map(Number).reduce((a, b) => a + b);
        console.log(Math.round(sum3) + '%(3)');
    }

    const [name] = useState([]);
    const [name2] = useState([]);
    const [name3] = useState([]);


    return (
        <div>
            <h1>홈</h1>
            <Link to='/login'><button className='btn'>로그인</button></Link>
            <Link to='/signup'><button className='btn'>회원가입</button></Link>
            <Link to='/mypage'><button className='btn'>마이페이지</button></Link>
            <br></br><br></br>
            <Calendar onClickDay={() => setModalIsOpen(true)} maxDate={new Date(new Date().setDate(new Date().getDate() + 27))} />
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                <h2>습관목록</h2>
                <ul>
                    <li>습관1 <Checkbox color='default' value={Number(3.5714285714285716)} onChange={(e) => sumChecked1(e)} /></li>
                    <li>습관2 <Checkbox color='default' value={Number(3.5714285714285716)} onChange={(e) => sumChecked2(e)} /></li>
                    <li>습관3 <Checkbox color='default' value={Number(3.5714285714285716)} onChange={(e) => sumChecked3(e)} /></li>
                </ul>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    );
}

export default Home;