import React from "react";
import * as S from "./CafeHashtagMain.styled";
import good from "../../../assets/images/good.png";
import bad from "../../../assets/images/bad.png";
import CafeHashHalfSection from "./CafeHashHalfSection";

const CafeHashtagMain = ({ positive, negative, userPick }) => {
  return (
    <S.CafeHashtagContainer>
      <CafeHashHalfSection
        type="positive"
        titleImg={good}
        hashtagBg="#F2ACAC"
        hashtagArray={positive}
        userPick={userPick}
      />

      <CafeHashHalfSection
        type="negative"
        titleImg={bad}
        hashtagBg="#77B9F2"
        hashtagArray={negative}
        userPick={userPick}
      />
    </S.CafeHashtagContainer>
  );
};

export default CafeHashtagMain;
