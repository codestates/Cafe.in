import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./layouts";
import MainPage from "./pages/MainPage/MainPage";
import MyPage from "./pages/Mypage/Mypage";

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
    <Router>
      <GlobalStyle />
      <ScrollToTop />

      <Navbar
        handleLoginSuccess={handleLoginSuccess}
        handleSignupSuccess={handleSignupSuccess}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />

      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <MainPage isLogin={isLogin} {...props} />}
        />
        <Route
          path="/mypage"
          render={(props) => (
            <MyPage loginInfo={loginInfo} setIsLogin={setIsLogin} {...props} />
          )}
        />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
