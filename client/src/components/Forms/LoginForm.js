import React, { useState } from "react";
import { Button } from "../../assets/styles/GlobalStyle";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  login,
  loginUserInfo,
  showModal,
  postCountResetAction,
} from "../../store/actions";
import imgkakao from "../../assets/images/kakao-login.png";
import imggoogle from "../../assets/images/google-login.png";
import "./Form.css";
import { emailCheck, passwordCheck1 } from "../../utils/RegExTest.js";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState({
    email: "yar0606@naver.com",
    password: "qwe!12345",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // const handleLoginSuccess = (loginInfo) => {
  //   dispatch(login(true));
  //   dispatch(showModal(false));
  //   dispatch(loginUserInfo(loginInfo));
  // };

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

    //! 서버 연동시 아래는 주석 처리??
    //handleLoginSuccess(loginInfo);

    axios
      .post(
        "http://localhost:8080/users/sign-in",
        { user_email: email, password: password },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((res) => {
        dispatch(showModal(false));
        dispatch(loginUserInfo(res.data.data.payload));
        dispatch(login(true));
        dispatch(postCountResetAction());
        //window.location.reload();
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_ID}&response_type=token&redirect_uri=http://localhost:3000&scope=openid%20profile%20email`;

  const googleLoginHandler = () => {
    window.location.assign(googleUrl);
  };

  return (
    <div>
      <center>
        <h2 className="header">로그인</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              onChange={handleInputValue("email")}
              placeholder="아이디를 입력하세요."
              value={loginInfo.email}
            />
          </div>
          <div></div>
          <div>
            <input
              type="password"
              onChange={handleInputValue("password")}
              placeholder="비밀번호를 입력하세요."
              value={loginInfo.password}
            />
          </div>

          <div className="error-message">{errorMessage}</div>

          <div />
          <Button
            className="btn btn-login"
            type="button"
            onClick={handleLoginInfo}
          >
            로그인
          </Button>
          {/* <div className="pw-sign-up">
            <a href="/forget-pw">
              <div className="forget-pw"> 비밀번호를 까먹으셨나요?</div>
            </a>
            <a href="/sign-up">
              <div className="sign-up"> 회원가입을 안하셨나요? </div>
            </a>
          </div> */}
          <div onClick={googleLoginHandler} style={{ cursor: "pointer" }}>
            <img
              className="btn-google-login"
              src={imggoogle}
              width="60"
              align="center"
              alt="google-logo"
            ></img>
          </div>
        </form>
      </center>
    </div>
  );
};

export default LoginForm;
