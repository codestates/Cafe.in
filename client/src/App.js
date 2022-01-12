import React, { useState, useEffect } from "react";
import GlobalStyle from "./assets/styles/GlobalStyle";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./layouts";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MyPage from "./pages/Mypage/Mypage";
import CafeInfo from "./pages/CafeInfo/CafeInfo";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./assets/styles/theme";
import { useSelector, useDispatch } from "react-redux";
import { userLocationAction } from "./redux/reducer/user";
import axios from "axios";
import Loading from "./pages/Loading";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const { isLoggedIn, userLatLong } = state;

  const [location, setLocation] = useState("");

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition((res) =>
    //   dispatch(userLocationAction(res.coords.latitude, res.coords.longitude))
    // );
    console.log("네비요청감");
  }, []);

  useEffect(() => {
    // location &&
    //   axios
    //     .get(
    //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${me.lat},${me.long}&key=${process.env.REACT_APP_API_KEY}`,
    //       { withCredentials: false }
    //     )
    //     .then((res) =>
    //       setLocation(res.data.results[1].address_components[2].long_name)
    //     );
    setLocation("대치동");
    console.log("좌표요청감");
  }, []);

  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState(null);

  const handleLoginSuccess = (loginInfo) => {
    setIsLogin(true);
    setLoginInfo(loginInfo);
    // console.log("Login SUCCESS!", loginInfo);
  };

  const handleSignupSuccess = (signupInfo) => {
    // console.log("Signup Success", signupInfo);
  };

  // 다음 6줄은 darkMode toggle을 위한 코드
  const [mode, setMode] = useState(theme);
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setMode(event.matches ? darkTheme : theme);
      });
  }, []);

  return (
    // darkMode 필요시 아래 theme={theme}을 theme={mode}로 바꾼다.
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollToTop />

      <Navbar
        handleLoginSuccess={handleLoginSuccess}
        handleSignupSuccess={handleSignupSuccess}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />

      <Routes>
        <Route path="/" element={<MainPage location={location} />} />
        <Route
          path="mypage"
          element={<MyPage loginInfo={loginInfo} setIsLogin={setIsLogin} />}
        />
        <Route path="cafeinfo/:id" element={<CafeInfo />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
