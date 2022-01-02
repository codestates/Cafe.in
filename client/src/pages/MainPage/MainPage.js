import React from "react";
import { MainListSection } from "../../components";
import { MainInfoSection } from "../../components";
import { homeObjOne } from "./MainInfoData";

const MainPage = ({ isLogin }) => {
  return (
    <>
      {!isLogin && <MainInfoSection homeObjOne={homeObjOne} />}
      <MainListSection />
    </>
  );
};

export default MainPage;
