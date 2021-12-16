import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./components/header/Header";
import LandingPage from "./components/LandingPage";
import { FooterContainer } from "./containers/footer";

function App() {
  return (
    <>
      <Header />
      <FooterContainer />
    </>
  );
}

export default App;
