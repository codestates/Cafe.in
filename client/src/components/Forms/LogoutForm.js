import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import {  Button } from '../../globalStyles';
import "./Form.css";

const LogoutForm = ({ handleLogout, setShowModal }) => {
  const [isLogout, setIsLogout] = useState(false);
  const history = useHistory();

  const handleOK = () => {
    
    axios.post(
      'http://localhost:8080/users/sign-out',
      null,
      { withCredentials: true }
    )
      .then((res) => {
        setIsLogout(true);
        handleLogout(isLogout);
        history.push('/')
      })
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      <center>
        <h2>Are you sure?</h2>
          <div>
          <Button primary
            className="btn btn-login"
            type="submit"
            onClick={handleOK}
          >
            OK
          </Button>
          
          <Button primary
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
