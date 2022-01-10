import React from "react";
import * as S from "./CafeHashtagMain.styled";
import good from "../../assets/images/good.png";
import bad from "../../assets/images/bad.png";
import { Button } from "../../assets/styles/GlobalStyle";
import CafeHashHalfSection from "./CafeHashHalfSection";
import { dummyGoodHashtags, dummyBadHashtags } from "./DummyDataHashtag";

const CafeHashtagMain = () => {
  return (
    <S.CafeHashtagContainer>
      <CafeHashHalfSection
        type="good"
        titleImg={good}
        hashtagBg="#F2ACAC"
        hashtagArray={dummyGoodHashtags}
      />

      <CafeHashHalfSection
        type="bad"
        titleImg={bad}
        hashtagBg="#77B9F2"
        hashtagArray={dummyBadHashtags}
      />
    </S.CafeHashtagContainer>
  );
};

export default CafeHashtagMain;
