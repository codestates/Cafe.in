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
import useWindowSize from "../../utils/hooks/useWindowSize";

const Navbar = () => {
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

  // 모바일 메뉴용
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    dispatch(postCategoryAction(""));
    setClick(false);
  };

  // custom hook : width에 따라 버튼 색 바꾸는 기능 (필요는 없음)
  const width = useWindowSize(setButton);

  // browser에서 현재 위치 가져오기
  useEffect(() => {
    dispatch(getCurrLocation());
  }, []);

  // 구글 geocode로 lat,lng을 주소로 변경
  useEffect(() => {
    {
      process.env.REACT_APP_ENV_GOOGLE_MAP === "no"
        ? dispatch(userAddressAction("대치동"))
        : dispatch(getCurrAddress(userLatLong.lat, userLatLong.long));
    }
  }, [userLatLong]);

  // 현재 무슨 동인지 표시
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

  // 로그인 되면 보이는 우측 버튼 두 개
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
            </D.SimpleDiv>

            <N.NavMenu onClick={handleClick} click={click}>
              {isLogin ? loginButton : notLoginButton}
            </N.NavMenu>
          </N.NavbarContainer>

          <ModalContainer />
        </N.Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;