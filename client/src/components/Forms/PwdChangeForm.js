import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
import {  Button } from '../../globalStyles';
import { emailCheck, passwordCheck } from "./RegExTest.js";
import imgkakao from '../../images/kakao-login.png'
import imggoogle from '../../images/google-login.png'
const { passwordCheck1, passwordCheck2 } = require('../Forms/RegExTest')

const PwdChangeForm = ({ setShowModal }) => {
  const [pwdInfo, setPwdInfo] = useState({
    oldPassword : "",
    newPassword : "",
    newPassword2 : ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleInputValue = (key) => (e) => {
    setPwdInfo({ ...pwdInfo, [key]: e.target.value });
  };

  const handleChangePWInfo = () => {
    const { oldPassword, newPassword, newPassword2 } = pwdInfo;
    if (!oldPassword) {
      setErrorMessage('현재 비밀번호를 입력하세요');
      return;
    }
    else if (!newPassword) {
      setErrorMessage('새 비밀번호를 입력하세요');
      return;
    }
    else if (newPassword !== newPassword2 ) {
      setErrorMessage('비밀번호가 일치하지 않습니다');
      return;
    }else if (!passwordCheck1){
      setErrorMessage("패스워드는 영문/숫자/특수문자 혼합 8~16글자 사이입니다.");
      return;
    }

    axios.patch(
      'http://localhost:8080/users/mypage/password',
      { old_password: oldPassword, new_password: newPassword },
      { 'Content-Type': 'application/json', withCredentials: true }
    )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data.message))
   
    setShowModal(false);
  }

  return (
    <div>
      <center>
        <h2>비밀번호 변경</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <span>현재 비밀번호 확인</span>
            <input type="password" value={pwdInfo.oldPassword} onChange={handleInputValue("oldPassword")} />
          </div>
          <div>
            <span>새 비밀번호</span>
            <input type="password" onChange={handleInputValue("newPassword")} />
          </div>
          <div>
            <span>새 비밀번호 재입력</span>
            <input type="password" onChange={handleInputValue("newPassword2")} />
          </div>

          <div className="error-message">{errorMessage}</div>

          <div />
          <div>
          <Button primary
            className="btn btn-login"
            type="submit"
            onClick={handleChangePWInfo}
          >
            비밀번호 변경
          </Button>
          <Button primary
            className="btn btn-login"
            // type="submit"
            onClick={handleCancel}
          >
            취소
          </Button>
          </div>
        </form>
      </center>
    </div>
  );
};

export default PwdChangeForm;
