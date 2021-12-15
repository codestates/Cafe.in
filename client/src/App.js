import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="landing-body">
        <LandingPage className="landing-body" />
      </div>
      <div className="footer">
        <Footer className="footer" />
      </div>
    </>
  );
}

export default App;
