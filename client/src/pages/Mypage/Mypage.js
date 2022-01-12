import React from "react";
import { MypageSection } from "../../components";
import { mypageObjOne } from "./MypageData";

const Mypage = () => {
  return (
    <>
      <MypageSection
        mypageObjOne={mypageObjOne}
      />
    </>
  );
};

export default Mypage;
