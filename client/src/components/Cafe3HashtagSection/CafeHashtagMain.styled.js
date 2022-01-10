import styled from "styled-components";
import { Link } from "react-router-dom";

export const CafeHashtagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

// CafeHashtagLikeWrapper와 CafeHashtagHateWrapper 복사 붙이기 + 이름 바꾸기
export const CafeHashtagSectionWrapper = styled.div`
  height: 100%;
  width: 49%;
  background: ${({ theme }) => theme.colors.mainBackground};
  border-radius: 40px;
  box-shadow: 0 0px 10px #aaaaaa;
  align-items: center;
  text-align: center;
  display: center;
  margin: 2px auto;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      transform: none;
    }
  }
`;

// export const CafeHashtagLikeWrapper  = styled.div`
// height: 490px;
// width: 49%;
// background: ${ ({theme}) => theme.colors.mainBackground };
// border-radius:40px;
// box-shadow: 0 0px 10px #aaaaaa;
// align-items:center;
// text-align:center;
// display: center;
// margin: 2px auto;
// margin-bottom:2rem;
// margin-top : 2rem;

// @media screen and (max-width: 960px) {
//     width: 100%;
//     &:hover {
//       transform: none;}
//     }
// `;

// export const CafeHashtagHateWrapper  = styled.div`
// height: 490px;
// width: 49%;
// border-radius:40px;
// box-shadow: 0 0px 10px #aaaaaa;
// align-items:center;
// text-align:center;
// display: center;
// margin: 2px auto;

// @media screen and (max-width: 960px) {
//     width: 100%;
//     &:hover {
//       transform: none;
//     }
//   }
// `;

export const CafeImg = styled.img`
//! border 임시
border: 0.1rem solid green;
  width: 15vh;
  height: 20vh;
  position: relative;
  align-items: center;
  text-align: center;
  margin-top: -1.3rem;
  margin-bottom: -1.3rem;

  @media screen and (max-width: 960px) {
    width: 30%;
    height: 27%;
  }
`;


// export const CafeLikeImg = styled.img`
//   width: 19%;
//   height: 42%;
//   position: relative;
//   align-items: center;
//   text-align: center;
//   margin-top: -1.3rem;

//   @media screen and (max-width: 960px) {
//     width: 30%;
//     height: 27%;
//   }
// `;

// export const CafeBadImg = styled.img`
//   width: 18%;
//   height: 40%;
//   position: relative;
//   align-items: center;
//   text-align: center;
//   margin-top: -1.3rem;

//   @media screen and (max-width: 960px) {
//     width: 30%;
//     height: 27%;
//   }
// `;

export const CafeListWrapper = styled.div`
//! border 임시
  border: 0.1rem solid red;
  &.short-div {
    height: 40%;
  }
  &.long-div {
    min-height: 40%;
    max-height: 30vh;
    overflow: auto;
  }
`

export const Cafemore = styled.div`
  color: #aaaaaa;
  text-shadow: 0px 1px 1px #cccccc;
`;

export const CafemoreWrapper = styled.div`
//! border 임시
  border: 0.1rem solid blue;
  align-items: right;
  text-align: right;
  padding-right: 2rem;
  margin-top: 0.4rem;

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

export const CafeRank = styled.div`
  padding-top: -10px;
  font-weight: 700;
  font-size: 32px;
  white-space: nowrap;
  margin-top: -8px;
  color: ${({ theme }) => theme.colors.cardBackground};
  margin: 4px 20px 0px 10px;
  text-align: left;
  text-shadow: 0px 1px #aaaaaa;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1440px) {
    font-size: 30px;
    width: 100%;
    margin: 4px 0px 0px 40px;
    text-align: left;
  }
`;

export const CafeRankCounts = styled.div`
  font-size: 28px;
  color: grey;
  margin: 0 30px 0 30px;
`

export const CafeRankBox = styled.span`
  font-weight: 700;
  width: 40%;
  color: #fff;
  padding: 4px 10px 4px 10px;
  vertical-align: middle;
  line-height: 2;
  font-size: 17px;
  background: ${({ bgColor }) => bgColor};
  border-radius: 12px;
  box-shadow: 1px 1px #cccc;
`;

// export const CafeRankBox  = styled.span`
//   font-weight :700;
//   width: 100%;
//   color:#fff;
//   padding: 4px 10px 4px 10px;
//   vertical-align: middle;
//   line-height: 2;
//   font-size: 17px;
//   background: #F2ACAC;
//   border-radius: 12px;
//   box-shadow: 1px 1px #cccc;
//   `

// export const CafeRankBox2  = styled.span`
// font-weight :700;
// color:#fff;
// padding: 4px 10px 4px 10px;
// vertical-align: middle;
// line-height: 2;
// font-size: 17px;
// background: #77B9F2;
// border-radius: 12px;
// box-shadow: 1px 1px #cccc;
// `

export const CafeInputWrapper = styled.div`
  border: 0.1rem solid red;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  margin: 4px 10px 0px 10px;
  display: flex;
  background: #fff;
  padding-right: 2rem;
  margin-top: 2.7rem;

  @media screen and (max-width: 1440px) {
    width: 10%;
    text-align: center;
    margin: 80px 0px 0px 10px;
  }
`;

export const Input = styled.input`
  height: 2.5rem;
  font-weight: 600;
  /* text-align: center; */
  color: ${"palevioletred"};
  background: ${({ theme }) => theme.colors.mainBackground};
  opacity: 0.9;
  box-shadow: 1px #cccccc;
  border: 10px solid ${({ theme }) => theme.colors.cardBackground};
  outline: none;

  @media screen and (max-width: 1440px) {
    width: 70%;
    text-align: center;
  }
`;

export const Input2 = styled.input`
  height: 43%;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.buttonSecondary};
  background: ${({ theme }) => theme.colors.mainBackground};
  opacity: 0.9;
  box-shadow: 1px #cccccc;
  border: 10px solid ${({ theme }) => theme.colors.cardBackground};
  outline: none;

  @media screen and (max-width: 1440px) {
    width: 70%;
    text-align: center;
  }
`;

export const HashtagInputWrapper = styled.div`
//! border 임시
  border: 0.1rem solid purple;
  display: flex;
  flex-direction: row;
`

export const DropdownMenu = styled.select`
  width: 10vw;
  height: 4vh;
  border-radius: 1em;
  text-align: center;
  font-size: 1.1rem;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  margin: 1rem;
`



