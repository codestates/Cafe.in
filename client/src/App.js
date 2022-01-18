import React, { useState, useEffect } from "react";
import GlobalStyle from "./assets/styles/GlobalStyle";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./layouts";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MyPage from "./pages/Mypage/Mypage";
import CafeInfo from "./pages/CafeInfo/CafeInfo";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/styles/theme";
import useDarkMode from "./utils/hooks/useDarkMode";

const App = () => {
  
  let theme = useDarkMode() ? darkTheme : lightTheme;
  if (process.env.REACT_APP_USE_DARK_MODE === "no") theme = lightTheme;

  // 다크모드
  return (
    // darkMode 필요시 아래 theme={theme}을 theme={mode}로 바꾼다.
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="cafeinfo/:id" element={<CafeInfo />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
