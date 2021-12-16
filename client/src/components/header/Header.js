import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Header.css";
import Modal from "./Modal";
import LoginForm from "./LoginForm"

function Header(props) {
  // model 창 구현해보기
  const [isLoginModal, setIsLoginModal] = useState(false);

  const openLoginModal = () => setIsLoginModal(true);
  const closeLoginModal = () => setIsLoginModal(false);

  const toggleLoginModal = () => {
    if (isLoginModal === false) {
      setIsLoginModal(true);
    } else if (isLoginModal === true) {
      setIsLoginModal(false);
    }
  };
  const handleOnClick = () => {
    toggleLoginModal();
  };

  return (
    <>
      <React.Fragment>
        <Modal
          show={isLoginModal}
          onCancel={closeLoginModal}
          header={<button onClick={closeLoginModal}>X</button>}
        > 
        {/* 이곳에 LoginModal의 props.children에 표시될 <div></div> */}
          <div className="login-container">
            <LoginForm />
          </div>
        </Modal>
      </React.Fragment>
      <div>
        <button id="login-button" onClick={handleOnClick}>
          Login Test
        </button>
      </div>
    </>
  );
}

export default Header;