import React, { useState } from "react";
import {  Button } from '../../globalStyles';
import axios from "axios";
import imgkakao from '../../images/kakao-login.png'
import imggoogle from '../../images/google-login.png'
import "./Form.css";
import { emailCheck, passwordCheck } from "./RegExTest.js";

const LoginForm = ({ handleLogin }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLoginInfo = () => {
    const { email, password } = loginInfo;
    if (!email && !password) {
      setErrorMessage("이메일과 비밀번호를 입력하세요");
      return;
    } else if (!email) {
      setErrorMessage("이메일을 입력하세요");
      return;
    } else if (!emailCheck(email)) {
      setErrorMessage("이메일 형식이 맞지 않습니다");
      return;
    } else if (!password) {
      setErrorMessage("패스워드를 입력하세요");
      return;
    } else if (!passwordCheck(password)) {
      setErrorMessage("패스워드는 영문/숫자 혼합 6글자 이상");
      return;
    }
    handleLogin(loginInfo);

    // ! 아래 주석은 지우지 마세요 => login axios 요청 (나중에)
    // axios
    // .post(
    //   "https://localhost:8080/users/signin",
    //   { email, password },
    // { 'Content-Type': 'application/json', withCredentials: true }
    // )
    // .then((data) => {handleLogin(loginInfo)})
    // .catch(err => console.log(err));
  };

  return (
    <div>
      <center>
        <h2>로그인</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input  type="text" onChange={handleInputValue("email")} />
          </div>
          <div></div>
          <div>
            <span>비밀번호</span>
            <input  type="password" onChange={handleInputValue("password")} />
          </div>

          <div className="error-message">{errorMessage}</div>

          <div />
          <Button primary
            className="btn btn-login"
            type="submit"
            onClick={handleLoginInfo}
          >
            로그인
          </Button>
          <div className="pw-sign-up"> 
          <a href="/forget-pw">
            <div className="forget-pw"> 비밀번호를 까먹으셨나요? 
          </div>
          </a>
          <a href="/sign-up">
          <div className="sign-up"> 회원가입을 안하셨나요? </div>
          </a>
          </div>
          <div class="box_btn block">
            <a href="/">
              <img className="btn-kakao-login" src={imgkakao} width="60" align="center"></img>
            </a>
             <span> </span>
            <a href="/">
               <img className="btn-google-login" src={imggoogle} width="60" align="center"></img>
            </a>

          </div>
        </form>
      </center>
    </div>
  );
};

export default LoginForm;
