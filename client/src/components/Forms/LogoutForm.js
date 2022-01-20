import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../assets/styles/GlobalStyle";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { login, showModal, loginUserInfo } from "../../store/actions";
import axiosConfig from "../../axiosConfig";

const LogoutForm = () => {
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const isShowModal = useSelector((state) => state.showModal.isShowModal);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOK = () => {
    axiosConfig.post(`/users/sign-out`).then(async () => {
      await navigate("/");
      dispatch(login(false));
      dispatch(showModal(false));
      dispatch(loginUserInfo(null));
    });
  };

  const handleCancel = () => {
    dispatch(showModal(false));
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
