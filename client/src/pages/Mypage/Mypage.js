import React from "react";
import { MypageSection } from "../../components";
import { mypageObjOne } from "./MypageData";

const Mypage = ({ loginInfo }) => {
  // console.log(loginInfo);
  return (
    <>
      <MypageSection
        loginInfo={loginInfo}
        mypageObjOne={mypageObjOne}
      />
    </>
  );
};

export default Mypage;
