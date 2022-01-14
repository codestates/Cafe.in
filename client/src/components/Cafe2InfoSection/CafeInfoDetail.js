import React from "react";
import * as S from "./CafeInfoDetail.styled";

const CafeInfoDetail = ({ data }) => {
  return (
    <>
      <S.CafeInfoContainer>
        <span style={{ margin: "15px", color: "lime" }}>
          가게주소 : {data.adress}
        </span>
        <div style={{ margin: "15px", color: "lime" }}>
          전화번호 : {data.tel}
        </div>
      </S.CafeInfoContainer>
    </>
  );
};

export default CafeInfoDetail;
