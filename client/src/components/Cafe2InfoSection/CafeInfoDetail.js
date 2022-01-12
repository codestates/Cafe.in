import React from "react";
import * as S from "./CafeInfoDetail.styled";

const CafeInfoDetail = ({ data }) => {
  return (
    <>
      <S.CafeInfoContainer>
        <h3>
          {data.tel} {data.adress}{" "}
        </h3>
      </S.CafeInfoContainer>
    </>
  );
};

export default CafeInfoDetail;
