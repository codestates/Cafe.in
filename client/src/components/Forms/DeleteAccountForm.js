import axios from "axios";
import React, { useState } from "react";
import { Button } from "../../globalStyles";
import { passwordCheck1, passwordCheck2 } from "./RegExTest.js";
import "./Form.css";

const DeleteAccountForm = ({ setShowModal }) => {
  const [deleteInfo, setDeleteInfo] = useState({
    password: "",
    confirmText: "delete",
    confirmTextUsrInput: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setDeleteInfo({ ...deleteInfo, [key]: e.target.value });
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleDeleteInfo = () => {
    const { password, confirmText, confirmTextUsrInput } = deleteInfo;

    if (!password) {
      setErrorMessage("패스워드를 입력하세요");
      return;
    } else if (confirmText !== confirmTextUsrInput) {
      setErrorMessage("문구가 일치하지 않습니다");
      return;
    }
    setShowModal(false);
  };
  return (
    <div>
      <center>
        <h2>회원탈퇴</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div>
              <span>본인 확인을 위해 비밀번호를 입력해주세요.</span>
              <input type="password" onChange={handleInputValue("password")} />
            </div>
            <div>
              <span>다음 문구를 똑같이 입력해주세요. "{deleteInfo.confirmText}"</span>
              <input type="password" onChange={handleInputValue("confirmTextUsrInput")} />
            </div>
          </div>
          <div className="error-message">{errorMessage}</div>
          <div>
            <Button
              primary
              className="btn btn-delete"
              onClick={handleDeleteInfo}
            >
              탈퇴하기
            </Button>
            <Button
              primary
              className="btn btn-login"
              type="submit"
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

export default DeleteAccountForm;
