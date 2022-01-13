import React from "react";
import * as S from "./CafeHashtagMain.styled";
import good from "../../assets/images/good.png";
import bad from "../../assets/images/bad.png";
import CafeHashHalfSection from "./CafeHashHalfSection";

const CafeHashtagMain = ({ positive, negative, userPick, clickHandle }) => {
  return (
    <S.CafeHashtagContainer>
      <CafeHashHalfSection
        type="positive"
        titleImg={good}
        hashtagBg="#F2ACAC"
        hashtagArray={positive}
        userPick={userPick}
        clickHandle={clickHandle}
      />

      <CafeHashHalfSection
        type="negative"
        titleImg={bad}
        hashtagBg="#77B9F2"
        hashtagArray={negative}
        userPick={userPick}
        clickHandle={clickHandle}
      />
    </S.CafeHashtagContainer>
  );
};

export default CafeHashtagMain;
