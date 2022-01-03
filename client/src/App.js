import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./layouts";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MyPage from "./pages/Mypage/Mypage";
import CafeInfo from "./pages/CafeInfo/CafeInfo";

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

  return (
    <>
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
    </>
  );
};

export default App;
