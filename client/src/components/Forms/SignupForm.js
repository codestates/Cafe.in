import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../store/actions";
import axios from "axios";
import "./Form.css";
import { Button } from "../../assets/styles/GlobalStyle";
import {
  emailCheck,
  passwordCheck1,
  passwordCheck2,
} from "../../utils/RegExTest.js";
import imgkakao from "../../assets/images/kakao-login.png";
import imggoogle from "../../assets/images/google-login.png";

const SignupForm = () => {
  const isShowModal = useSelector((state) => state.showModal.isShowModal);
  const dispatch = useDispatch();

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

  // 회원가입 성공시
  const handleSignupSuccess = () => {
    dispatch(showModal(false));
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
      setErrorMessage(
        "패스워드는 영문/숫자/특수문자 혼합 8~16글자 사이입니다."
      );
      return;
    } else if (passwordCheck2(password)) {
      setErrorMessage("연속된 영문/숫자 3글자 이상 불가");
      return;
    } else if (password !== confirmPwd) {
      setErrorMessage("패스워드가 일치하지 않습니다");
      return;
    }

    //! 서버 연동시 다음 주석 처리?
    //handleSignupSuccess();

    //! 서버연동시 다음 주석 해제
    axios
      .post(
        "http://localhost:8080/users/sign-up",
        { user_email: email, password: password, nickname: nickname },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((res) => {
        dispatch(showModal(false));
        alert(
          `${res.data.data.nickname}님! 가입이 완료되었습니다. 로그인해주세요`
        );
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <div>
      <center>
        <h2 className="verify">회원가입</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="이메일을 입력해주세요"
              onChange={handleInputValue("email")}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="별명을 입력해주세요"
              onChange={handleInputValue("nickname")}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handleInputValue("password")}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="비밀번호 재입력"
              onChange={handleInputValue("confirmPwd")}
            />
          </div>

          <div className="error-message">{errorMessage}</div>

          <div />
          <Button
            primary
            className="btn btn-login"
            type="button"
            onClick={handleSignupInfo}
          >
            확인
          </Button>
          <div className="box_btn block">
            <a href="/">
              <img
                className="btn-kakao-login"
                src={imgkakao}
                width="60"
                align="center"
                alt="kakao-logo"
              ></img>
            </a>
            <span> </span>
            <a href="/">
              <img
                className="btn-google-login"
                src={imggoogle}
                width="60"
                align="center"
                alt="google-logo"
              ></img>
            </a>
          </div>
        </form>
      </center>
    </div>
  );
};

export default SignupForm;
