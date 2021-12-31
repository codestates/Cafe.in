import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import { Button } from "../../GlobalStyle";
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
import {
  MapButtonLink,
  SimpleDiv,
  MapIcon,
  InputText,
  MainDropDown,
} from "./Dropdown.elements";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import DropDownMenu from "./DropdownMenu";
import { regionData } from "./RegionDummyData";

const Navbar = ({
  handleLoginSuccess,
  handleSignupSuccess,
  isLogin,
  setIsLogin,
}) => {

  // 지역 데이터
  const [currLoc, setCurrLoc] = useState("신논현역");

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
  const openLogout = () => {
    setClickedMenu("logout");
    setShowModal((showModal) => !showModal);
  }


  // 로그인 때 보이는 JSX를 변수에 넣기
  // 로그인 상태 아닐 때 보이는 우측 버튼 두 개
  const notLoginButton = (
    <>
      <NavItem>
        <NavBtnLink>
          <Button onClick={openLogin}>로그인</Button>
        </NavBtnLink>
      </NavItem>

      <NavItemBtn>
        <NavBtnLink>
          <Button primary onClick={openSignup}>
            회원가입
          </Button>
        </NavBtnLink>
      </NavItemBtn>
    </>
  );

  // dropdown bar
  const dropDownBar = (
    <>
      <MapButtonLink>
        <SimpleDiv>
          <MapIcon />
        </SimpleDiv>
        <SimpleDiv>
          <InputText value={currLoc} disabled />
        </SimpleDiv>
        <MainDropDown id="dropbox">
          <DropDownMenu
            regionData={regionData}
            currLoc={currLoc}
            setCurrLoc={setCurrLoc}
          />
        </MainDropDown>
      </MapButtonLink>
    </>
  );

  // 로그인되면 보일 우측 버튼 2개
  const loginButton = (
    <>
      <NavItem>
        <NavLinks to="/mypage">
          <Button>
            My Page
          </Button>
        </NavLinks>
      </NavItem>

      <NavItemBtn>
        <NavBtnLink>
          <Button onClick={openLogout}>Log out</Button>
        </NavBtnLink>
      </NavItemBtn>
    </>
  );

  return (
    <>
      <IconContext.Provider value={{ color: "#472d0c" }}>
        <Nav>
          <NavbarContainer>
            <SimpleDiv>
              <NavLogo to="/">
                <NavIcon />
                Cafe In
              </NavLogo>
              {isLogin ? dropDownBar : null}
            </SimpleDiv>

            <NavMenu>{isLogin ? loginButton : notLoginButton}</NavMenu>
          </NavbarContainer>

          <ModalContainer 
            clickedMenu={clickedMenu}
            showModal={showModal}
            setShowModal={setShowModal}
            handleLoginSuccess={handleLoginSuccess}
            handleSignupSuccess={handleSignupSuccess}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
          />
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
