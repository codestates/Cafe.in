import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconContext } from "react-icons/lib";
import { Button } from "../../assets/styles/GlobalStyle";
import * as N from "./Navbar.styled";
import * as D from "./Dropdown.styled";
import ModalContainer from "../../components/ModalContainer/ModalContainer";
import DropDownMenu from "./DropdownMenu";
import { regionData } from "./DropDownDummyData";

const Navbar = ({
  handleLoginSuccess,
  handleSignupSuccess,
  isLogin,
  setIsLogin,
}) => {
  // 지역 데이터
  const [currLoc, setCurrLoc] = useState("신논현역");
  // 맵 아이콘 클릭시 현재 위치 가져오기
  const [currPos, setCurrPos] = useState({ lat: null, lng: null });
  const [currAddr, setCurrAddr] = useState("");

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
  };


  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        setCurrPos({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
      (err) => {
        setCurrPos({
          lat: 37.49791,
          lng: 127.02761,
        });
        window.alert('현재 위치 차단시 서울 강남역으로 세팅됩니다.')
      }
    );
  }, []);
  // 현재 위치 받아오기
  // const handleCurrentPosition = () => {
    // 다음 4줄 : Google reverse-Geocode를 위한 axios parameter 세팅하기
    const geocode_url = "https://maps.googleapis.com/maps/api/geocode/json";
    let params = new URLSearchParams();
    params.append("latlng", currPos.lat + "," + currPos.lng);
    params.append("key", process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

    const displayPosition = () => { 
      axios
      .get(geocode_url, { params })
      .then((data) => {
        const addr = data.data.results[0].address_components;
        const addrString = addr[2].long_name + ' ' + addr[1].long_name + ' ' + addr[0].long_name;
        setCurrAddr(addrString);
        // console.log(addrString);
      }) 
      .catch((err) => console.log(err));
    }
  // };

  // 로그인 때 보이는 JSX를 변수에 넣기
  // 로그인 상태 아닐 때 보이는 우측 버튼 두 개
  const notLoginButton = (
    <>
      <N.NavItem>
        <N.NavBtnLink>
          <Button onClick={openLogin}>로그인</Button>
        </N.NavBtnLink>
      </N.NavItem>

      <N.NavItemBtn>
        <N.NavBtnLink>
          <Button primary onClick={openSignup}>
            회원가입
          </Button>
        </N.NavBtnLink>
      </N.NavItemBtn>
    </>
  );

 // Disply 현재 위치
  // {currPos.lat !== null && displayPosition() }
  const displayCurrentPosition = (
    <>
      <D.MapButtonLink>
        <D.DropDownDiv>
          <D.DropDownSpan>현재 위치</D.DropDownSpan>
          <D.InputText value={currAddr} disabled />
        </D.DropDownDiv>
      </D.MapButtonLink>
    </>
  );

   // dropdown bar
  // const dropDownBar = (
  //   <>
  //     <D.MapButtonDiv>
  //       {/* <D.SimpleDiv>
  //         <D.MapIcon />
  //       </D.SimpleDiv> */}
  //       <D.DropDownDiv>
  //         <D.DropDownSpan>현재 보고 계신 지역</D.DropDownSpan>
  //         <D.InputText value={currLoc} disabled />
  //       </D.DropDownDiv>
  //       <D.MainDropDown id="dropbox">
  //         <DropDownMenu
  //           regionData={regionData}
  //           currLoc={currLoc}
  //           setCurrLoc={setCurrLoc}
  //         />
  //       </D.MainDropDown>
  //     </D.MapButtonDiv>
  //   </>
  // );

  // 로그인되면 보일 우측 버튼 2개
  const loginButton = (
    <>
      <N.NavItem>
        <N.NavLinks to="/mypage">
          <Button>마이페이지</Button>
        </N.NavLinks>
      </N.NavItem>

      <N.NavItemBtn>
        <N.NavBtnLink>
          <Button onClick={openLogout}>로그아웃</Button>
        </N.NavBtnLink>
      </N.NavItemBtn>
    </>
  );

  return (
    <>
      <IconContext.Provider value={{ color: "#472d0c" }}>
        <N.Nav>
          <N.NavbarContainer>
            <D.SimpleDiv>
              <N.NavLogo to="/">
                <N.NavIcon />
                Cafe In
              </N.NavLogo>
              {displayCurrentPosition}
              {/* <N.NavLogo2>
                <N.NavIcon2 />
              </N.NavLogo2> */}
              {/* {dropDownBar} */}
            </D.SimpleDiv>

            <N.NavMenu>{isLogin ? loginButton : notLoginButton}</N.NavMenu>
          </N.NavbarContainer>

          <ModalContainer
            clickedMenu={clickedMenu}
            showModal={showModal}
            setShowModal={setShowModal}
            handleLoginSuccess={handleLoginSuccess}
            handleSignupSuccess={handleSignupSuccess}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
          />
        </N.Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
