import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../assets/styles/GlobalStyle";
import "./Form.css";
import { logoutAction } from "../../redux/reducer/user";
import { useDispatch } from "react-redux";

const LogoutForm = ({ handleLogout, setShowModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOK = () => {
    //! 서버와 연동시 다음 세 줄은 주석처리

    axios
      .post("http://localhost:8080/users/sign-out", null, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(logoutAction());
        navigate("/");
      });
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="logout-container">
      <center>
        <h2 className="log-out">로그아웃 하시겠습니까？</h2>
        <div>
          <Button className="btn btn-login" type="submit" onClick={handleOK}>
            확인
          </Button>

          <Button
            className="btn btn-login"
            type="submit"
            onClick={handleCancel}
          >
            취소
          </Button>
        </div>
      </center>
    </div>
  );
};

export default LogoutForm;
