import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./CafeInfo.styled";

import { Cafe1ImageSection } from "../../components";
import { Cafe2InfoSection } from "../../components";
import { Cafe3HashtagSection } from "../../components";
import { Cafe4MapSection } from "../../components";

import { dummyData } from "../../components/MainListSection/MainListDummyData";

const CafeInfo = () => {
  const { id } = useParams();
  const search = (num) => dummyData.find((key) => key.id === num);
  const cafe = search(Number(id));
  const img = "https://images.squarespace-cdn.com/content/v1/5bfdafa63917eec8bc387b85/1560564506941-8HTL1GRDEX0UKW0964YT/APC_0050.JPG?format=2500w";
  const dummyinfo = "주소: 부산시 해운대 수심 200미터, 전화번호: 032-8282-8282, 영업시간: 폐업중, 주차: 트럭도 주차 쌉가능"

  return (
    <S.CafePageContainer>

      <S.Cafe1ImageWrapper>
        <Cafe1ImageSection img={img} title={cafe.title} />
      </S.Cafe1ImageWrapper>

      <S.Cafe2InfoWrapper>
        <Cafe2InfoSection data={dummyinfo} />
      </S.Cafe2InfoWrapper>

      <S.Cafe3HashtagWrapper>
        <Cafe3HashtagSection />
      </S.Cafe3HashtagWrapper>

      <S.Cafe4MapWrapper>
        <Cafe4MapSection />
      </S.Cafe4MapWrapper>

    </S.CafePageContainer>
  );
};

export default CafeInfo;
