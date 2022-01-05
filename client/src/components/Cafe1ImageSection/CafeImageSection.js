import React from "react";
import * as S from "./CafeImageSection.styled";

const CafeImageSection = ({ img, title }) => {
  return (
    <S.CafeImgSectionContainer>
      <S.ImageContainer src={img} alt="cafe_title_img" />
      <S.TitleContainer>{title}</S.TitleContainer>
    </S.CafeImgSectionContainer>
  );
};

export default CafeImageSection;
