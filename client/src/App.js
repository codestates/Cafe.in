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
  // 다음 6줄은 darkMode toggle을 위한 코드
  const [mode, setMode] = useState(theme);
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setMode(event.matches ? darkTheme : theme);
      });
  }, []);
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
