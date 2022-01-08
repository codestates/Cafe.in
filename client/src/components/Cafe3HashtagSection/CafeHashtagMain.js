import React from 'react';
import * as S from './CafeHashtagMain.styled';
import good from "../../assets/images/good.png"
import bad from "../../assets/images/bad.png"
import {  Button } from '../../assets/styles/GlobalStyle';

const CafeHashtagMain = () => {

  return (
    <S.CafeHashtagContainer>
      <S.CafeHashtagLikeWrapper>
        <S.CafemoreWrapper><S.Cafemore to='/#'> 해시태그 더보기</S.Cafemore> </S.CafemoreWrapper>
        <S.CafeLikeImg src={good} />
        <S.CafeRank>
          1. <S.CafeRankBox>＃콘센트많아요</S.CafeRankBox>
        </S.CafeRank>
        <S.CafeRank>
          2. <S.CafeRankBox>＃조용함</S.CafeRankBox>
        </S.CafeRank>
        <S.CafeRank>
          3.  <S.CafeRankBox>＃의자가편안하고 쾌적해요</S.CafeRankBox>
        </S.CafeRank>

        <S.CafeInputWrapper>
        
            <S.Input type="text" defaultValue="해시태그적기" />      
            <Button type="submit"> 입력 </Button>
            
        </S.CafeInputWrapper>

      </S.CafeHashtagLikeWrapper>
      <S.CafeHashtagHateWrapper>
      <S.CafemoreWrapper><S.Cafemore to='/#'> 해시태그 더보기</S.Cafemore> </S.CafemoreWrapper>
      <S.CafeBadImg src={bad} />
      <S.CafeRank>
          1. <S.CafeRankBox2>＃콘센트적어요</S.CafeRankBox2>
        </S.CafeRank>
        <S.CafeRank>
          2. <S.CafeRankBox2>＃조용함</S.CafeRankBox2>
        </S.CafeRank>
        <S.CafeRank>
          3.  <S.CafeRankBox2>＃의자가 불편해요</S.CafeRankBox2>
        </S.CafeRank>


        <S.CafeInputWrapper>
        
            <S.Input2 type="text" defaultValue="해시태그적기" />      
            <Button type="submit"> 입력 </Button>
            
        </S.CafeInputWrapper>

      </S.CafeHashtagHateWrapper>
    </S.CafeHashtagContainer>
  )
};

export default CafeHashtagMain;