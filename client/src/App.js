import React, { useState, useEffect } from "react";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { Navbar, Footer } from "./layouts";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MyPage from "./pages/Mypage/Mypage";
import CafeInfo from "./pages/CafeInfo/CafeInfo";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/styles/theme";
import useDarkMode from "./utils/hooks/useDarkMode";
import ScrollButton from "./components/ScrollToTop/ScrollButton";

const App = () => {
  
  let theme = useDarkMode() ? darkTheme : lightTheme;
  if (process.env.REACT_APP_USE_DARK_MODE === "no") theme = lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="cafeinfo/:id" element={<CafeInfo />} />
      </Routes>

      <ScrollButton />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
