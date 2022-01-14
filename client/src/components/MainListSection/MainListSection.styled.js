import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainSectionSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  grid-gap: 5px;
  background: ${({ theme }) => theme.colors.mainBackground};
`;

export const MainSectionHeading = styled.h1`
  color: #fff;
  font-size: 40px;
  margin-bottom: 24px;
`;

export const MainSectionBottom = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: light;
  margin-top: 100px;
`;

export const MainSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const MainSectionCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  text-decoration: none;
  border-radius: 20px;
  width: 350px;
  height: 480px;
  border-radius: 20x;
  margin: 30px;
  animation: zoomIn 2s;
  animation-duration: 1s;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

export const MainSectionCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
`;

export const MainSectionCardPlan = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #614b3f;
  font-size: 22px;
  margin: 8px 7px;
  text-align: center;

  &:hover {
    transform: scale(1.09);
    transition: all 0.3s ease-out;
    color: #311e26;
  }
`;

export const MainSectionCardExp = styled.h4`
  margin-bottom: 5px;
`;

export const MainSectionCardLength = styled.p`
  color: #614b3f;
  text-shadow: 0 0 2 #fff;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 2px;
  text-align: right;

  &:hover {
    color: #311e26;
  }
`;

export const MainSectionCardFeatures = styled.ul`
  margin: 4px 0 0px;
  list-style: none;
  display: flex;
  font-weight: 550;
  flex-direction: column;
  align-items: left;
  color: #614b3f;

  &:hover {
    color: #311e26;
    margin-left: 0;
  }
`;

export const MainSectionCardFeature = styled.li`
  margin-bottom: 0px;
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  text-align: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

export const Img = styled.img`
  border-radius: 10px;
  max-width: 100%;
  height: 280px;
  opacity: 0.8;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const HashtagSelect = styled.div`

  &:hover {
    transform: scale(1.09);
    transition: all 0.3s ease-out;
    color: #ffe4b5;
  
  }
`;

export const Img8 = styled.img`
  max-width: 100%;
  display: flex;
  left: 80x;
  filter: drop-shadow(1px 1px 1px #cccccc);
`;
