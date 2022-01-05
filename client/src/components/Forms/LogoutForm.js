
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {  Button } from '../../GlobalStyle';
import "./Form.css";

const LogoutForm = ({ handleLogout, setShowModal }) => {
  const [isLogout, setIsLogout] = useState(false);

  const navigate = useNavigate();

  const handleOK = () => {
    //! 서버와 연동시 다음 세 줄은 주석처리
    setIsLogout(true);
    handleLogout(isLogout);
    navigate('/');

    //! 지우지 마세요. 서버랑 연동시 다시 주석 해제
    // axios.post(
    //   'http://localhost:8080/users/sign-out',
    //   null,
    //   { withCredentials: true }
    // )
    //   .then((res) => {
    //     setIsLogout(true);
    //     handleLogout(isLogout);
    //     navigate('/');
    //   })
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="logout-container">
      <center>
        <h2 className="log-out">로그아웃 하시겠습니까？</h2>
          <div>
          <Button
            className="btn btn-login"
            type="submit"
            onClick={handleOK}
          >
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
