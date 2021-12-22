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

const Modal = ({
  clickedMenu,
  showModal,
  setShowModal,
  handleLoginSuccess,
  handleSignupSuccess
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
              {clickedMenu === "login" ? (
                <LoginForm handleLogin={handleLogin}/>
              ) : (
                <SignupForm handleSignup={handleSignup} />
              )}
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
