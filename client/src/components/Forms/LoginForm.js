import React, { useState } from "react";
import { Button } from "../../GlobalStyle";
import axios from "axios";
import imgkakao from "../../assets/images/kakao-login.png";
import imggoogle from "../../assets/images/google-login.png";
import "./Form.css";
import { emailCheck, passwordCheck1 } from "../../utils/RegExTest.js";

const LoginForm = ({ handleLogin }) => {
  const [loginInfo, setLoginInfo] = useState({
    id: 0,
    email: "yar0606@naver.com",
    password: "qwe!1234",
    nickname: "MarvelFan",
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
    } else if (!passwordCheck1(password)) {
      setErrorMessage(
        "비밀번호는 영문/숫자/특수문자로 이루어진 8~16자 사이입니다."
      );
      return;
    }

    //! 서버 연동시 아래는 주석 처리
    handleLogin(loginInfo);  

    //! 아래 주석은 지우지 마세요 => 서버 연동시 구현
    // axios
    //   .post(
    //     "http://localhost:8080/users/sign-in",
    //     { user_email: email, password: password },
    //     { "Content-Type": "application/json", withCredentials: true }
    //   )
    //   .then((res) => {
    //     axios
    //       .get("http://localhost:8080/users/mypage/", { withCredentials: true })
    //       .then((res) => {
    //         const { id, user_email, password, nickname } = res.data.data;
    //         const payload = {
    //           id: id,
    //           email: user_email,
    //           password: password,
    //           nickname: nickname,
    //         };
    //         handleLogin(payload);
    //       })
    //       .catch((err) => console.log(err.response.data.message));
    //   })
    //   .catch((err) => console.log(err.response.data.message));
  };

  return (
    <div>
      <center>
        <h2>로그인</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input
              type="text"
              onChange={handleInputValue("email")}
              value={loginInfo.email}
            />
          </div>
          <div></div>
          <div>
            <span>비밀번호</span>
            <input
              type="password"
              onChange={handleInputValue("password")}
              value={loginInfo.password}
            />
          </div>

          <div className="error-message">{errorMessage}</div>

          <div />
          <Button
            primary
            className="btn btn-login"
            type="button"
            onClick={handleLoginInfo}
          >
            로그인
          </Button>
          <div className="pw-sign-up">
            <a href="/forget-pw">
              <div className="forget-pw"> 비밀번호를 까먹으셨나요?</div>
            </a>
            <a href="/sign-up">
              <div className="sign-up"> 회원가입을 안하셨나요? </div>
            </a>
          </div>
          <div className="box_btn block">
            <a href="/">
              <img
                className="btn-kakao-login"
                src={imgkakao}
                width="60"
                align="center"
              ></img>
            </a>
            <span> </span>
            <a href="/">
              <img
                className="btn-google-login"
                src={imggoogle}
                width="60"
                align="center"
              ></img>
            </a>
          </div>
        </form>
      </center>
    </div>
  );
};

export default LoginForm;
