import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import SignUp from "./pages/SignUp/SignUp";
import MyPage from './pages/Mypage/Mypage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";
import MainPage from './pages/MainPage/MainPage';

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState(null);

  const handleLoginSuccess = (loginInfo) => {
    setIsLogin(true);
    setLoginInfo(loginInfo);
    console.log('Login SUCCESS!', loginInfo);
  }

  const handleSignupSuccess = (signupInfo) => {
    console.log('Signup Success', signupInfo);
  }


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
        {isLogin === true 
        ? <Route path='/' exact component={MainPage}/> 
        : <Route path='/' exact component={Home} /> }
        <Route
          path="/mypage"
          render={props => <MyPage loginInfo={loginInfo} {...props} />}
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
