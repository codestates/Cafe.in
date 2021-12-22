import React, { useState } from "react";
import {  Button } from '../../globalStyles';
import "./Form.css";

const LogoutForm = ({ handleLogout, setShowModal }) => {
  const [isLogout, setIsLogout] = useState(false);

  const handleOK = () => {
    setIsLogout(true);
    handleLogout(isLogout);
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
