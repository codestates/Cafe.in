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
import {
  MapButtonLink,
  SimpleDiv,
  MapIcon,
  InputText,
  MainDropDown,
} from "./Dropdown.elements";
import Modal from "../Forms/Modal";
import DropDownMenu from "./DropdownMenu";
import { regionData } from "./RegionDummyData";

const Navbar = ({
  handleLoginSuccess,
  handleSignupSuccess,
  isLogin,
  setIsLogin,
}) => {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

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

  // 로그인 때 보이는 JSX를 변수에 넣기
  // 로그인 상태 아닐 때 보이는 우측 버튼 두 개
  const notLoginButton = (
    <>
      <NavItem>
        <NavLinks>
          <Button onClick={openLogin}>로그인</Button>
        </NavLinks>
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
        <NavLinks>
          <Button primary onClick={openLogin}>
            My Page
          </Button>
        </NavLinks>
      </NavItem>

      <NavItemBtn>
        <NavBtnLink>
          <Button onClick={openSignup}>Log out</Button>
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
              <NavLogo to="/main">
                <NavIcon />
                Cafe In
              </NavLogo>
              {isLogin ? dropDownBar : null}
            </SimpleDiv>

            <NavMenu>{isLogin ? loginButton : notLoginButton}</NavMenu>
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
};

export default Navbar;
