import React from "react";
import * as S from "./CafeHashtagMain.styled";
import good from "../../assets/images/good.png";
import bad from "../../assets/images/bad.png";
import { Button } from "../../assets/styles/GlobalStyle";
import CafeHashHalfSection from "./CafeHashHalfSection";
import { dummyGoodHashtags, dummyBadHashtags } from "./DummyDataHashtag";

const CafeHashtagMain = ({ positive, negative, userPick }) => {
  return (
    <S.CafeHashtagContainer>
      <CafeHashHalfSection
        type="good"
        titleImg={good}
        hashtagBg="#F2ACAC"
        hashtagArray={dummyGoodHashtags}
        positive={positive}
        userPick={userPick}
      />

      <CafeHashHalfSection
        type="bad"
        titleImg={bad}
        hashtagBg="#77B9F2"
        hashtagArray={dummyBadHashtags}
        negative={negative}
        userPick={userPick}
      />
    </S.CafeHashtagContainer>
  );
};

export default CafeHashtagMain;
