import React from "react";
import { MainListSection } from "../../components";
import { MainInfoSection } from '../../components';
import { homeObjOne } from './MainInfoData';

const MainPage = ({ isLogin }) => {
  
  return (
    <>
      { !isLogin && <MainInfoSection homeObjOne={homeObjOne} /> }
      <MainListSection />
      {/* <div style={{height:'800px', background:'#000'}} /> */}
    </>
  );
}

export default MainPage;
