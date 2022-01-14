import React from "react";
import { FaHome, FaPhone } from "react-icons/fa";
import * as S from "./CafeInfoDetail.styled";

const CafeInfoDetail = ({ data }) => {
 

  return (
    <>
      <S.CafeInfoContainer>
        <S.Addressd >
        <FaHome/>   <S.Address>{data.adress}</S.Address>
        </S.Addressd>
        
        <S.Phonenumber>
        <FaPhone/> <S.Number>
          {data.tel }</S.Number>
        </S.Phonenumber>
      </S.CafeInfoContainer>
    </>
  );
};

export default CafeInfoDetail;
