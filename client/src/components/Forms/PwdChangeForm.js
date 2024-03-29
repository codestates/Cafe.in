import React, { useState } from "react";
import axiosConfig from "../../axiosConfig";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../store/actions";
import { Button } from "../../assets/styles/GlobalStyle";
import { emailCheck, passwordCheck } from "../../utils/helper/RegExTest.js";
import imgkakao from "../../assets/images/kakao-login.png";
import imggoogle from "../../assets/images/google-login.png";
const {
  passwordCheck1,
  passwordCheck2,
} = require("../../utils/helper/RegExTest");

const PwdChangeForm = () => {
  const isShowModal = useSelector((state) => state.showModal.isShowModal);
  const dispatch = useDispatch();

  const [pwdInfo, setPwdInfo] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleCancel = () => {
    dispatch(showModal(false));
  };

  const handleInputValue = (key) => (e) => {
    setPwdInfo({ ...pwdInfo, [key]: e.target.value });
  };

  const handleChangePWInfo = () => {
    const { oldPassword, newPassword, newPassword2 } = pwdInfo;

    if (!oldPassword) {
      setErrorMessage("현재 비밀번호를 입력하세요");
      return;
    } else if (!newPassword) {
      setErrorMessage("새 비밀번호를 입력하세요");
      return;
    } else if (newPassword !== newPassword2) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
      return;
    } else if (!passwordCheck1) {
      setErrorMessage(
        "패스워드는 영문/숫자/특수문자 혼합 8~16글자 사이입니다."
      );
      return;
    }

    axiosConfig
      .patch(`/users/mypage/password`, {
        old_password: oldPassword,
        new_password: newPassword,
      })
      .then((res) => console.log(res.data.message))
      .catch((err) => console.log(err.response.data.message));

    dispatch(showModal(false));
  };

  return (
    <div>
      <center>
        <h2 className="header">비밀번호 변경</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={pwdInfo.oldPassword}
              onChange={handleInputValue("oldPassword")}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="새 비밀번호"
              onChange={handleInputValue("newPassword")}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="새 비밀번호 재입력"
              onChange={handleInputValue("newPassword2")}
            />
          </div>

          <div className="error-message">{errorMessage}</div>

          <div />
          <div>
            <Button
              className="btn btn-login"
              type="button"
              onClick={handleChangePWInfo}
            >
              비밀번호 변경
            </Button>
            <Button
              className="btn btn-login"
              type="button"
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
