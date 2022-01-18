import React, { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../assets/styles/GlobalStyle";
import * as N from "./Navbar.styled";
import * as D from "./Dropdown.styled";
import ModalContainer from "../../components/ModalContainer/ModalContainer";

import { useSelector, useDispatch } from "react-redux";
import {
  clickModalType,
  showModal,
  userAddressAction,
  getCurrLocation,
  getCurrAddress,
} from "../../store/actions";
import { postCategoryAction } from "../../store/actions";

const Navbar = ({ handleLoginSuccess }) => {
  // Redux
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const isShowModal = useSelector((state) => state.showModal.isShowModal);
  const address = useSelector((state) => state.addressReducer.currAddr);
  const userLatLong = useSelector((state) => state.userLocation.userLatLong);
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const dispatch = useDispatch();


  // Modal bar 구현 부분
  const openSignup = () => {
    // setClickedMenu("signup");
    dispatch(clickModalType("signup"));
    dispatch(showModal(!isShowModal));
  };
  const openLogin = () => {
    // setClickedMenu("login");
    dispatch(clickModalType("login"));
    dispatch(showModal(!isShowModal));
  };
  const openLogout = () => {
    // setClickedMenu("logout");
    dispatch(clickModalType("logout"));
    dispatch(showModal(!isShowModal));
  };

  // 여기서부터 아래 20줄은 무슨 코드지?
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    dispatch(postCategoryAction(""));
    setClick(false);
  };

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

  window.addEventListener("resize", showButton);


 
  useEffect(() => {
    dispatch(getCurrLocation());
  }, []);

  useEffect(() => {
    {
      process.env.REACT_APP_ENV_GOOGLE_MAP === "no"
        ? dispatch(userAddressAction('대치동'))
        : dispatch(getCurrAddress(userLatLong.lat, userLatLong.long));
    }
  }, [userLatLong]);

  const displayCurrentPosition = (
    <>
      <D.MapButtonLink>
        <D.DropDownDiv>
          <D.DropDownSpan>현재 위치</D.DropDownSpan>
          <D.InputText disabled placeholder={address} />
        </D.DropDownDiv>
      </D.MapButtonLink>
    </>
  );

  // 로그인 상태 아닐 때 보이는 우측 버튼 두 개
  const notLoginButton = (
    <>
      <N.NavMenu onClick={handleClick} click={click}>
        <N.NavItem>
          <N.NavBtnLink>
            <Button onClick={openLogin}>로그인</Button>
          </N.NavBtnLink>
        </N.NavItem>
        <N.NavItemBtn>
          {button ? (
            <N.NavBtnLink>
              <Button onClick={openSignup}>회원가입</Button>
            </N.NavBtnLink>
          ) : (
            <N.NavBtnLink>
              <Button onClick={openSignup} primary>
                회원가입
              </Button>
            </N.NavBtnLink>
          )}
        </N.NavItemBtn>
      </N.NavMenu>
    </>
  );

  const loginButton = (
    <>
      {userInfo && userInfo.profile_img ? (
        <N.Img src={userInfo.profile_img} />
      ) : (
        ""
      )}
      <N.NavItem>
        <N.NavLinks to="/mypage">
          <Button>마이페이지</Button>
        </N.NavLinks>
      </N.NavItem>

      <N.NavItemBtn>
        {button ? (
          <N.NavBtnLink>
            <Button onClick={openLogout}>로그아웃</Button>
          </N.NavBtnLink>
        ) : (
          <N.NavBtnLink>
            <Button onClick={openLogout} primary>
              로그아웃
            </Button>
          </N.NavBtnLink>
        )}
      </N.NavItemBtn>
    </>
  );

  return (
    <>
      <IconContext.Provider value={{ color: "#7B95F2" }}>
        <N.Nav>
          <N.NavbarContainer>
            <D.SimpleDiv>
              <N.NavLogo to="/#" onClick={closeMobileMenu}>
                <N.NavIcon />
                Cafe In
              </N.NavLogo>
              <N.MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </N.MobileIcon>
              {displayCurrentPosition}
              {/* <N.NavLogo2>
                <N.NavIcon2 />
              </N.NavLogo2> */}
              {/* {dropDownBar} */}
            </D.SimpleDiv>

            <N.NavMenu onClick={handleClick} click={click}>
              {isLogin ? loginButton : notLoginButton}
            </N.NavMenu>
          </N.NavbarContainer>

          <ModalContainer handleLoginSuccess={handleLoginSuccess} />
        </N.Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
