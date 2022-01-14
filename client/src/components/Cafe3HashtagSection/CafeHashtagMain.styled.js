import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../assets/styles/GlobalStyle";

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
  width: 15vh;
  height: 20vh;
  position: relative;
  align-items: center;
  text-align: center;
  margin-bottom: -3rem;
  @media screen and (max-width: 960px) {
    width: 30%;
    height: 30%;
    margin-top: 0.3rem;
    margin-bottom: -2rem;
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
  &.short-div {
    height: 40%;
  }
  &.long-div {
    min-height: 40%;
    max-height: 30vh;
    overflow: auto;
  }
`;

export const Cafemore = styled.div`
  color: #aaaaaa;
  text-shadow: 1px 1px 1px #cccccc;
`;

export const CafemoreWrapper = styled.div`
  align-items: right;
  text-align: right;
  padding-right: 2rem;
  margin-top: 0.4rem;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const CafeRank = styled.div`
  font-weight: 700;
  font-size: 32px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.cardBackground};
  margin: 10px 0px 0px 27%;
  text-align: left;
  display: flex;
  @media screen and (max-width: 960px) {
    font-size: 30px;
    width: 100%;
    margin: 10px 0px 0px 20px;
    text-align: center;
  }
`;

export const CafeRankCounts = styled.div`
  font-size: 17px;
  color: #aaaaaa;
  text-align: right;
  margin: 10px 7px 0px 7px;
  @media screen and (max-width: 960px) {
    font-size: 14px;
    color: grey;
    margin: 10px 10px 10px 4px;
  }
`;
export const Rankdiv = styled.div`
  width: 50%;
  height: 100%;
  color: #cccccc;
  background: ${({ bgColor }) => bgColor};
  border-radius: 30px;
  box-shadow: 1px 1px #cccccc;
  text-shadow: 1px 1px 1px #6e6e6e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 18px;
  padding-top: 2px;
  vertical-align: middle;
  display: flex;
  justify-content: left;

  @media screen and (max-width: 1000px) {
    width: 70%;
    text-align: left;
  }
`;

export const CafeRankBox = styled.span`
  font-weight: 700;
  color: #ffff;
  padding: 4px 10px 4px 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-shadow: 1px 1px 1px #6e6e6e;
  font-size: 18px;
  @media screen and (max-width: 960px) {
    width: 70%;
    text-align: left;
    font-size: 16px;
  }
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
  align-items: center;
  text-align: center;
  @media screen and (max-width: 960px) {
    text-align: center;
    align-items: center;
  }
`;

export const HashtagSection = styled.div`
  align-items: center;
  text-align: center;
  padding: 10px 0px 10px 0px;
  @media screen and (max-width: 960px) {
    align-items: left;
  }
`;

export const Input = styled.input`
  height: 2rem;
  font-weight: 600;
  /* text-align: center; */
  color: #0c0c0c;
  background: ${({ theme }) => theme.colors.mainBackground};
  text-align: left;
  outline: none;
  @media screen and (max-width: 960px) {
    width: 40%;
    text-align: left;
  }
`;

export const HashtagInputWrapper = styled.div`
  align-items: center;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: left;
  }
`;

export const DropdownMenu = styled.select`
  height: 2rem;
  width: 17%;
  border-radius: 30px;
  border: 3px solid #e6c17b;
  text-align: center;
  color: grey;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  margin: 1rem;
  @media screen and (max-width: 960px) {
    height: 2rem;
    width: 33%;
    border-radius: 30px;
    border: 3px solid #e6c17b;
    text-align: center;
    color: grey;
    font-size: 15px;
    outline: none;
  }
`;

export const ImgIcon = styled.img`
  margin: 10px 4px 0px 10px;
  width: 24px;
  height: 24px;
  @media screen and (max-width: 960px) {
    margin: 10px 4px 4px 10px;
    width: 20px;
    height: 24px;
  }
`;

export const Button = styled.button`
  margin: 0px 10px;
  border-radius: 40px;
  background: #e6c17b;
  padding: 7px 20px;
  color: ${({ theme }) => theme.colors.buttonFontColor};
  font-size: 13px;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #cccccc;
    background-color: ;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    width: 80px;
    margin-top: 4px;
    margin-bottom: 10px;
    text-align: center;
    vertical-align: center;
  }
`;

export const Buttonheart = styled.div`
  cursor:pointer
  display:flex;
  margin-top:3px;
  margin-bottom:-7px;
  margin-left: 10px;
  color:#de4545;
`;