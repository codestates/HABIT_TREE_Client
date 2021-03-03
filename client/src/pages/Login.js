import React from "react";
// import "../App.css";
import { Link, withRouter } from "react-router-dom";
import { BsFillPersonFill } from 'react-icons/bs';
import axios from "axios";

axios.defaults.withCredentials = true;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  handleLogin = () => {
    const { handleResponseSuccess } = this.props;
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({
        errorMessage: "이메일과 비밀번호를 입력하세요"
      });
      return;
    }
    else {
      this.setState({
        errorMessage: ""
      });
    }

    return axios
      .post("https://localhost:4000/signin", {
        email: email,
        password: password,
      })
      .then(handleResponseSuccess)
      .catch((err) => {
        alert("Login failed");
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <center>
          <h1><div><BsFillPersonFill size='150' /></div><br />로그인</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <span>이메일</span>
              <input type='email' onChange={this.handleInputValue("email")}></input>
            </div>
            <div>
              <span>비밀번호</span>
              <input type='password' onChange={this.handleInputValue("password")}></input>
            </div>
            <div>
              <Link to='/signup'>아직 아이디가 없으신가요?</Link>
            </div>
            <button className='btn btn-login' type='submit' onClick={this.handleLogin}>
              로그인
            </button>
            {this.state.errorMessage ?
              <div className="alert-box">
                {this.state.errorMessage}
              </div> : ''}
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);
