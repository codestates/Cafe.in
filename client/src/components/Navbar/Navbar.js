import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./Navbar.elements";
import Modal from "../Forms/Modal";

const Navbar = ({ handleLoginSuccess, handleSignupSuccess }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  // Modal bar 구현 부분
  const [showModal, setShowModal] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(null);
  const openSignup = () => {
    setClickedMenu("signup");
    setShowModal((showModal) => !showModal);
  };
  const openLogin = () => {
    setClickedMenu("login");
    setShowModal((showModal) => !showModal);
  };


  return (
    <>
      <IconContext.Provider value={{ color: "#472d0c" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/main">
              <NavIcon />
              Cafe In 
            </NavLogo>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">
                  <Button onClick={openLogin}>로그인</Button>
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                <NavBtnLink to="/sign-up">
                  <Button primary onClick={openSignup}>
                    회원가입
                  </Button>
                </NavBtnLink>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
          <Modal
            clickedMenu={clickedMenu}
            showModal={showModal}
            setShowModal={setShowModal}
            handleLoginSuccess={handleLoginSuccess}
            handleSignupSuccess={handleSignupSuccess}
          />
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
