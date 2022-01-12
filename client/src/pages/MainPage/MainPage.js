import React from "react";
import { MainListSection } from "../../components";
import { MainInfoSection } from "../../components";
import { homeObjOne } from "./MainInfoData";

import { useSelector } from "react-redux";
// import { login } from "../../store/actions";

const MainPage = () => {
  // Redux
  const isLogin = useSelector(state => state.isLogin.isLogin);

  return (
    <>
      {!isLogin && <MainInfoSection homeObjOne={homeObjOne} />}
      <MainListSection />
    </>
  );
};

export default MainPage;
