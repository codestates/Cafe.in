import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  MainSectionSection,
  MainSectionWrapper,
  MainSectionContainer,
  MainSectionCard,
  MainSectionCardInfo,
  MainSectionCardPlan,
  MainSectionCardExp ,
  MainSectionCardLength,
  MainSectionCardFeatures,
  MainSectionCardFeature,
} from './MainSection.elements';

function MainSection() {
  return (
      <MainSectionSection>
        <MainSectionWrapper>
          <MainSectionContainer>
            <MainSectionCard to='/'>
              <MainSectionCardInfo>
                <MainSectionCardPlan>서울시 카페</MainSectionCardPlan>
                <MainSectionCardExp ></MainSectionCardExp>
                <MainSectionCardLength>1.00 km</MainSectionCardLength>
                <MainSectionCardFeatures>
                  <MainSectionCardFeature>#조용함</MainSectionCardFeature>
                  <MainSectionCardFeature>#여자많음</MainSectionCardFeature>
                  <MainSectionCardFeature>#콘센트많음</MainSectionCardFeature>
                </MainSectionCardFeatures>
              </MainSectionCardInfo>
            </MainSectionCard>
            <MainSectionCard to='/'>
              <MainSectionCardInfo>
                <MainSectionCardPlan>수원시 카페</MainSectionCardPlan>
                <MainSectionCardExp ></MainSectionCardExp>
                <MainSectionCardLength>1.00 km</MainSectionCardLength>
                <MainSectionCardFeatures>
                  <MainSectionCardFeature>#조용함</MainSectionCardFeature>
                  <MainSectionCardFeature>#역에서가까움</MainSectionCardFeature>
                  <MainSectionCardFeature>#수원핫플</MainSectionCardFeature>
                </MainSectionCardFeatures>
              </MainSectionCardInfo>
            </MainSectionCard>
            <MainSectionCard to='/sign-up'>
              <MainSectionCardInfo>
                <MainSectionCardPlan>대전시 카페</MainSectionCardPlan>
                <MainSectionCardExp ></MainSectionCardExp>
                <MainSectionCardLength>1.00 km</MainSectionCardLength>
                <MainSectionCardFeatures>
                  <MainSectionCardFeature>#무드있음</MainSectionCardFeature>
                  <MainSectionCardFeature>#의자가불편</MainSectionCardFeature>
                  <MainSectionCardFeature>#초코라떼없음</MainSectionCardFeature>
                </MainSectionCardFeatures>
              </MainSectionCardInfo>
            </MainSectionCard>
            <MainSectionCard to='/'>
              <MainSectionCardInfo>
                <MainSectionCardPlan>부산시 카페</MainSectionCardPlan>
                <MainSectionCardExp ></MainSectionCardExp>
                <MainSectionCardLength>1.00 km</MainSectionCardLength>
                <MainSectionCardFeatures>
                  <MainSectionCardFeature>#인기많음</MainSectionCardFeature>
                  <MainSectionCardFeature>#의자편함</MainSectionCardFeature>
                  <MainSectionCardFeature>#브런치가능</MainSectionCardFeature>
                </MainSectionCardFeatures>
              </MainSectionCardInfo>
            </MainSectionCard>
          </MainSectionContainer>
        </MainSectionWrapper>
      </MainSectionSection>
  );
}
export default MainSection;