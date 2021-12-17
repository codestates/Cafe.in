<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> upstream/dev
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const handleLoginSuccess = (loginInfo) => {
    setIsLogin(true);
    console.log('Login SUCCESS!', loginInfo);
  }

  const handleSignupSuccess = (signupInfo) => {
    console.log('Signup Success', signupInfo);
  }

  const [userInfo, setUserInfo] = useState(null);

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar
        handleLoginSuccess={handleLoginSuccess}
        handleSignupSuccess={handleSignupSuccess}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
