import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainSectionSection = styled.div`
  padding: 100px 0 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:#D7AC87;
`;

export const MainSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  width: 280px;
  height: 340px;
  text-decoration: none;
  border-radius: 20px;
  
  &:nth-child(-n+5) {
    margin: 30px;
  }
  &:hover {
    transform: scale(1.04);
    transition: all 0.3s ease-out;
    color: #0000;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      transform: none;
    }
  }
`;

export const MainSectionCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 340px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;


export const MainSectionCardPlan = styled.h3`
  margin-top:30px;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const MainSectionCardExp = styled.h4`
  font-size: 40px;
`;

export const MainSectionCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 40px;
`;

export const MainSectionCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffff;
`;

export const MainSectionCardFeature = styled.li`
  margin-bottom: 10px;
`;