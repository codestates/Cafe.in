import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainSectionSection = styled.div`
  padding: 100px 0 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #D7AC87;
`;

export const MainSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  margin-top:100px;
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

export const MainSectionCard = styled(Link)`
  background: #472d0c;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  text-decoration: none;
  border-radius: 20px;
  width: 350px;
  height: 480px;
  border-radius: 20x;
  margin : 40px;
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const MainSectionCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color:#FFE4B5;
`;

export const MainSectionCardIcon = styled.div`
  margin: 4px 4px;
`;

export const MainSectionCardPlan = styled.h3`
  color:#FFE4B5;
  font-size: 23px;

  &:hover {
    transform: scale(1.09);
    transition: all 0.3s ease-out;
    color: #9F814F;
  }
`;

export const MainSectionCardExp = styled.h4`
  margin-bottom: 5px;
`;

export const MainSectionCardLength = styled.p`
  color:#B4845F;
  font-size: 18px;
  margin-bottom: 0px;

  &:hover {
    transform: scale(1.09);
    transition: all 0.3s ease-out;
    color:#FFE4B5;
  }
`;

export const MainSectionCardFeatures = styled.ul`

  margin: 10px 0 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #B4845F;

  &:hover {
    transform: scale(1.09);
    transition: all 0.3s ease-out;
    color: #FFE4B5;
  }
`;

export const MainSectionCardFeature = styled.li`
  margin-bottom: 4px;
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  display: flex;
`;

export const Img = styled.img`
  border-radius:10px;
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  height: 280px;
`;