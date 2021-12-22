import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import {
  Background,
  ModalLogo,
  ModalIcon,
  ModalWrapper,
  ModalImg,
  ModalContent,
  CloseModalButton,
} from "./Modal.elements";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import LogoutForm from "./LogoutForm";

const Modal = ({
  clickedMenu,
  showModal,
  setShowModal,
  handleLoginSuccess,
  handleSignupSuccess,
  isLogin,
  setIsLogin
}) => {
  const modalRef = useRef();
  // 쓸데없는 기능 : 팝업창 위에서 아래로 내려오는 animation
  //
  // const animation = useSpring({
  //   config: {
  //     duration: 150
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  // })

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  //Escape key 눌렀을 때 닫기
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  });

  // 로그인 handler
  const handleLogin = (loginInfo) => {
    setShowModal(false);
    handleLoginSuccess(loginInfo);
  };
  // 회원가입 handler
  const handleSignup = (signupInfo) => {
    setShowModal(false);
    handleSignupSuccess(signupInfo);
  };
  // 로그아웃 handler
  const handleLogout = (isLogout) => {
    setShowModal(false);
    setIsLogin(false);
  }

  const innerForm = () => {
    console.log('clickedMenu', clickedMenu);
    if (clickedMenu === 'login') {
      return <LoginForm handleLogin={handleLogin}/>
    } else if (clickedMenu === 'signup') {
      return <SignupForm handleSignup={handleSignup} />
    } else if (clickedMenu === 'logout') {
      return <LogoutForm handleLogout={handleLogout} setShowModal={setShowModal} />
    }
  }

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          {/* <animated.div style={animation}> */}
          <ModalWrapper showModal={showModal}>
            <ModalLogo>
              <ModalIcon />
              Cafe In
            </ModalLogo>

            <ModalContent>
              {innerForm()}
            </ModalContent>

            <CloseModalButton
              aria-label="Close Modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
          {/* </animated.div> */}
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
