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

const App = () => {
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
        <Route path="/" element={<MainPage isLogin={isLogin} />} />
        <Route
          path="mypage"
          element={<MyPage loginInfo={loginInfo} setIsLogin={setIsLogin} />}
        />
        <Route path="cafeinfo/:id" element={<CafeInfo />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
