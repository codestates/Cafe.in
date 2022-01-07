import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CafeHashtagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center ;
  width: 100%;


  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const CafeHashtagLikeWrapper  = styled.div`
height: 490px;
width: 49%;
background: #FDF5E6;
border-radius:40px;
box-shadow: 0 0px 10px #aaaaaa;
align-items:center;
text-align:center;
display: center; 
margin: 2px auto;
margin-bottom:2rem;
margin-top : 2rem;

@media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      transform: none;}
    }
`;


export const CafeHashtagHateWrapper  = styled.div`
height: 490px;
width: 49%;
border-radius:40px;
box-shadow: 0 0px 10px #aaaaaa;
align-items:center;
text-align:center;
display: center; 
margin: 2px auto;

@media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      transform: none;
    }
  }
`;

 
export const CafeLikeImg  = styled.img`
  width:19%;
  height:42%;
  position: relative;
  align-items:center;
  text-align:center ;
  margin-top: -1.3rem;


  @media screen and (max-width: 960px) {
   width:30%;
   height:27%;
  }
`;



export const CafeBadImg = styled.img`
  width:18%;
  height:40%;
  position: relative;
  align-items:center;
  text-align:center ;
  margin-top: -1.3rem;
  

@media screen and (max-width: 960px) {
  width:30%;
   height:27%;
  }

`;

export const Cafemore = styled(Link)`

  color: #aaaaaa;
  text-shadow : 0px 1px 1px #CCCCCC;
`;


export const CafemoreWrapper  = styled.div`

align-items:right;
text-align:right;
padding-right:2rem;
margin-top:.4rem;

@media screen and (max-width: 1440px) {
    width: 100%;}
`;


export const CafeRank  = styled.p`
 padding-top:-10px;
 font-weight :700;
 font-size: 32px;
 white-space:nowrap;
 margin-top:-8px;
 color: #E6C17B;
 margin : 4px 240px 0px 180px;
 text-align:left;
 text-shadow: 0px 1px #aaaaaa;


@media screen and (max-width: 1440px) {
    font-size: 30px;
    width: 100%;
    margin : 4px 0px 0px 40px;
    text-align:left;
  
  }

`;


export const　CafeRankBox  = styled.span`
  font-weight :700;
  width: 100%;
  color:#fff;
  padding: 4px 10px 4px 10px;
  vertical-align: middle; 
  line-height: 2;
  font-size: 17px;
  background: #F2ACAC;
  border-radius: 12px;  
  box-shadow: 1px 1px #cccc;


  ` 


export const　CafeRankBox2  = styled.span`
font-weight :700;
color:#fff;
padding: 4px 10px 4px 10px;
vertical-align: middle; 
line-height: 2;
font-size: 17px;
background: #77B9F2;
border-radius: 12px;  
box-shadow: 1px 1px #cccc;
` 


export const CafeInputWrapper = styled.div`
align-items:center;
text-align:center;
white-space:nowrap;
margin : 4px 200px 0px 180px;
display: flex;
background: #fff;
padding-right:2rem;
margin-top:2.7rem;

@media screen and (max-width: 1440px) {
    width: 10%;
    text-align:center;
    margin : 80px 0px 0px 10px;
  
  }

`;






export const Input = styled.input`
height: 43%;
font-weight: 600;
text-align:center;
color: ${"palevioletred"};
background: #FDF5E6;
opacity: .9;
box-shadow: 1px #cccccc;
border: 10px solid #E6C17B;
outline: none;


@media screen and (max-width: 1440px) {
    width: 70%;
    text-align:center; 
  }
`;

export const Input2 = styled.input`
height: 43%;
font-weight: 600;
text-align:center;
color: #7b95f2;
background: #FDF5E6;
opacity: .9;
box-shadow: 1px #cccccc;
border: 10px solid #E6C17B;
outline: none;


@media screen and (max-width: 1440px) {
    width: 70%;
    text-align:center; 
  }
`;

