import React, { useState } from "react";
import { Button } from "../../assets/styles/GlobalStyle";
import axios from "axios";
import imgkakao from "../../assets/images/kakao-login.png";
import imggoogle from "../../assets/images/google-login.png";
import "./Form.css";
import { emailCheck, passwordCheck1 } from "../../utils/RegExTest.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../redux/reducer/user";

const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "yar0606@naver.com",
    password: "qwe!12345",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  let navigate = useNavigate();

  const dispatch = useDispatch();

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
    axios
      .post(
        "http://localhost:8080/users/sign-in",
        {
          user_email: loginInfo.email,
          password: loginInfo.password,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(loginAction(res.data.data.payload));
        // navigate("/mypage");
        //어디로 가야 하오
      });
    //handleLogin(loginInfo);
  };
  const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_ID}&response_type=token&redirect_uri=http://localhost:3000&scope=openid%20profile%20email`;
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_ID}&redirect_uri=http://localhost:3000`;

  const googleLoginHandler = () => {
    window.location.assign(googleUrl);
  };
  const kakaoLoginHandler = () => {
    window.location.assign(kakaoUrl);
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
          <div className="box_btn block">
            <div onClick={kakaoLoginHandler}>
              <img
                className="btn-kakao-login"
                src={imgkakao}
                width="60"
                align="center"
                alt="kakao-logo"
              ></img>
            </div>
            <span> </span>
            <div onClick={googleLoginHandler} style={{ cursor: "pointer" }}>
              <img
                className="btn-google-login"
                src={imggoogle}
                width="60"
                align="center"
                alt="google-logo"
              ></img>
            </div>
          </div>
        </form>
      </center>
    </div>
  );
};

export default LoginForm;
