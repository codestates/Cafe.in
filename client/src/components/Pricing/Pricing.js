import React from 'react';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock, GiBlackBook } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardExp ,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  PricingBottom,
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#FAD79B', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>서비스 맛보기</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>수원시 카페</PricingCardPlan>
                <PricingCardExp ></PricingCardExp>
                <PricingCardLength>1.00 km</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>#조용함</PricingCardFeature>
                  <PricingCardFeature>#여자많음</PricingCardFeature>
                  <PricingCardFeature>#수원핫플</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                  </PricingCardIcon>
                <PricingCardPlan>서울시 카페</PricingCardPlan>
                <PricingCardExp ></PricingCardExp>
                <PricingCardLength>1.00 km</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>#조용함</PricingCardFeature>
                  <PricingCardFeature>#여자많음</PricingCardFeature>
                  <PricingCardFeature>#수원핫플</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>서울시 카페</PricingCardPlan>
                <PricingCardExp ></PricingCardExp>
                <PricingCardLength>1.00 km</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>#조용함</PricingCardFeature>
                  <PricingCardFeature>#여자많음</PricingCardFeature>
                  <PricingCardFeature>#수원핫플</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiBlackBook  />
                  </PricingCardIcon>
                <PricingCardPlan>서울시 카페</PricingCardPlan>
                <PricingCardExp ></PricingCardExp>
                <PricingCardLength>1.00 km</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>#조용함</PricingCardFeature>
                  <PricingCardFeature>#여자많음</PricingCardFeature>
                  <PricingCardFeature>#수원핫플</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
          <PricingBottom>지금 내 주변의 카페를 알고싶다면？</PricingBottom>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;