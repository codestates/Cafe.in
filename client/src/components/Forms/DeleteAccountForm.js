import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../assets/styles/GlobalStyle";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { login, showModal, loginUserInfo } from "../../store/actions";

const DeleteAccountForm = ({ handleLogout }) => {
  const isShowModal = useSelector((state) => state.showModal.isShowModal);
  const dispatch = useDispatch();

  const [deleteInfo, setDeleteInfo] = useState({
    password: "",
    confirmText: "delete",
    confirmTextUsrInput: "",
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setDeleteInfo({ ...deleteInfo, [key]: e.target.value });
  };

  const handleCancel = () => {
    dispatch(showModal(false));
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

    // ! 서버 연동시 주석 처리
    // handleLogout(true);
    // navigate("/");

    // ! 서버연동시 주석 해제
    axios
      .post(
        "http://ec2-52-79-84-183.ap-northeast-2.compute.amazonaws.com/users/delete-account",
        { password },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then(() => {
        alert("회원 탈퇴가 완료되었습니다. ㅜㅜ");
        dispatch(login(false));
        dispatch(showModal(false));
        dispatch(loginUserInfo(null));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(showModal(false));
  };
  return (
    <div>
      <center>
        <h2 className="verify">회원탈퇴</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div>
              <input
                type="password"
                placeholder="본인 확인을 위해 비밀번호를 입력해주세요."
                onChange={handleInputValue("password")}
                value={deleteInfo.password}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="다음 문구를 똑같이 입력해주세요"
                value={deleteInfo.confirmTextUsrInput}
                onChange={handleInputValue("confirmTextUsrInput")}
              />
            </div>
            <div>
              <span className="confirm">{deleteInfo.confirmText}</span>
            </div>
          </div>
          <div className="error-message">{errorMessage}</div>
          <div>
            <Button
              className="btn btn-delete"
              type="button"
              onClick={handleDeleteInfo}
            >
              탈퇴하기
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

export default DeleteAccountForm;
