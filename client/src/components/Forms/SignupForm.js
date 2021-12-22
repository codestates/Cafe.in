import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import {  Button } from '../../globalStyles';
import { emailCheck, passwordCheck } from "./RegExTest.js";
import imgkakao from '../../images/kakao-login.png'
import imggoogle from '../../images/google-login.png'

const SignupForm = ({ handleSignup }) => {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPwd: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };

  const handleSignupInfo = () => {
    const { email, nickname, password, confirmPwd } = signupInfo;
   
    if (!email) {
      setErrorMessage("이메일을 입력하세요");
      return;
    } else if (!emailCheck(email)) {
      setErrorMessage("이메일 형식이 맞지 않습니다");
      return;
    } else if (!nickname) {
      setErrorMessage("사용할 별명을 입력하세요");
      return;
    } else if (!password) {
      setErrorMessage("패스워드를 입력하세요");
      return;
    } else if (!passwordCheck(password)) {
      setErrorMessage("패스워드는 영문/숫자 혼합 6글자 이상");
      return;
    } else if (password !== confirmPwd) {
      setErrorMessage("패스워드가 일치하지 않습니다");
      return;
    }
    handleSignup(signupInfo);

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
        <h2>회원가입</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type="text" onChange={handleInputValue("email")} />
          </div>
          <div>
            <span>별명</span>
            <input type="text" onChange={handleInputValue("nickname")} />
          </div>
          <div>
            <span>비밀번호</span>
            <input type="password" onChange={handleInputValue("password")} />
          </div>
          <div>
            <span>비밀번호 확인</span>
            <input type="password" onChange={handleInputValue("confirmPwd")} />
          </div>

          <div className="error-message">{errorMessage}</div>

          <div />
          <Button primary
            className="btn btn-login"
            type="submit"
            onClick={handleSignupInfo}
          >
            Submit
          </Button>
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

export default SignupForm;
