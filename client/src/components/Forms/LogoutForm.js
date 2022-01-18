import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../assets/styles/GlobalStyle";
import "./Form.css";
import { useSelector, useDispatch } from "react-redux";
import { login, showModal, loginUserInfo } from "../../store/actions";

const LogoutForm = () => {
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const isShowModal = useSelector((state) => state.showModal.isShowModal);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOK = () => {
    //! 지우지 마세요. 서버랑 연동시 다시 주석 해제
    //? 넵!
    axios
      .post("http://ec2-52-79-84-183.ap-northeast-2.compute.amazonaws.com/users/sign-out", null, {
        withCredentials: true,
      })
      .then(() => {
        navigate("/");
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
