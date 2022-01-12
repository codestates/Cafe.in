import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from 'react-dom';
import { useSpring, animated } from "react-spring";
// import { Link } from "react-router-dom";
import * as Styled from "./ModalContainer.styled";
import LoginForm from "../Forms/LoginForm";
import SignupForm from "../Forms/SignupForm";
import LogoutForm from "../Forms/LogoutForm";
import PwdChangeForm from "../Forms/PwdChangeForm";
import DeleteAccountForm from "../Forms/DeleteAccountForm";

import { useSelector, useDispatch } from "react-redux";
import { clickModalType, login } from "../../store/actions";

const ModalContainer = ({
  showModal,
  setShowModal,
  handleLoginSuccess,
  handleSignupSuccess,
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

  const modalType = useSelector(state => state.modalType.clickedModalType);
  const isLogin = useSelector(state => state.isLogin.isLogin);
  const dispatch = useDispatch();

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
    // setIsLogin(false);
    dispatch(login(false));
  }

  const innerForm = () => {
    if (modalType === 'login') {
      return <LoginForm handleLogin={handleLogin}/>
    } else if (modalType === 'signup') {
      return <SignupForm handleSignup={handleSignup} />
    } else if (modalType === 'logout') {
      return <LogoutForm handleLogout={handleLogout} setShowModal={setShowModal} />
    } else if (modalType === 'pwdchange') {
      return <PwdChangeForm setShowModal={setShowModal} />
    } else if (modalType === 'delaccount') {
      return <DeleteAccountForm handleLogout={handleLogout} setShowModal={setShowModal} />
    }
  }

  return ReactDOM.createPortal(
    <>
      {showModal && (
        <Styled.Background ref={modalRef} onClick={closeModal}>
          {/* <animated.div style={animation}> */}
          <Styled.ModalWrapper showModal={showModal}>
            <Styled.ModalLogo to='/'>
              <Styled.ModalIcon />
              Cafe In
            </Styled.ModalLogo>

            <Styled.ModalContent>
              {innerForm()}
            </Styled.ModalContent>

            <Styled.CloseModalButton
              aria-label="Close Modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </Styled.ModalWrapper>
          {/* </animated.div> */}
        </Styled.Background>
      )}
    </>,
    document.querySelector('#modal')
  );
};

export default ModalContainer;
