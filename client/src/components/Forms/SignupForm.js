import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import {  Button } from '../../globalStyles';
import { emailCheck, passwordCheck1, passwordCheck2 } from "./RegExTest.js";
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
    } else if (!passwordCheck1(password)) {
      setErrorMessage("패스워드는 영문/숫자/특수문자 혼합 8~16글자 사이입니다.");
      return;
    } else if(passwordCheck2(password)) {
      setErrorMessage("연속된 영문/숫자 3글자 이상 불가")
      return;
    } else if (password !== confirmPwd) {
      setErrorMessage("패스워드가 일치하지 않습니다");
      return;
    }
    axios.post(
      "http://localhost:8080/users/sign-up",
      { user_email: email, password: password, nickname: nickname },
      { 'Content-Type': 'application/json', withCredentials: true }
    )
      .then((res) => {
        setSignupInfo(res.data.data)
        handleSignup(signupInfo)
      })
      .catch(err => console.log(err.response.data.message));
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
