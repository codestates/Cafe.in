import React from 'react';
import * as S from './CafeInfoDetail.styled';

const CafeInfoDetail = ({ data }) => {

  return (
    <>
    <S.CafeInfoContainer>
      <h3>{data}</h3>
    </S.CafeInfoContainer>
      
    </>
  )
};

export default CafeInfoDetail;