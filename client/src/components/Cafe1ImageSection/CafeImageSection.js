import React from "react";
import * as S from "./CafeImageSection.styled";

const CafeImageSection = ({ img, title }) => {
  //이미지 size 1500x260 가량. 300으로 가도 무관
  return (
    <S.CafeImgSectionContainer>
      <S.ImageContainer src={img} alt="cafe_title_img" />
      <S.TitleContainer>{title}</S.TitleContainer>
    </S.CafeImgSectionContainer>
  );
};

export default CafeImageSection;
