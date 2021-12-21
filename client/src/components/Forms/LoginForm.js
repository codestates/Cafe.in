import React, { useState } from "react";
import {  Button } from '../../globalStyles';
import axios from "axios";
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
            Submit
          </Button>

          <div class="box_btn block">
            <a href="/list/API/login_kakao_sync.html?ks_type=" class="btn-kakao-login">
              <span>
                <p size="4"> 카카오 로그인</p>
              </span>
            </a>

          </div>
        </form>
      </center>
    </div>
  );
};

export default LoginForm;
