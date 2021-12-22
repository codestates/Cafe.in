import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingBottom,
} from './Pricing.elements';
import PricingFragment from './PricingFragment';
import { distanceCalc } from './DistCalculator.js';
import { dummyData, currentLocation } from './PricingDummyData';

function Pricing() {

  // axios 요청으로 JSON을 받아와서 array+object형태로 바꾼다.
  // 여기서는 dummy data 이용

  

  const { lat: currLat, long: currLong} = currentLocation;

  const priceMap = dummyData.map(({id,title, title_img, lat, long, likes_hash_tags}) => {
    let dist = Math.round((distanceCalc(currLat, currLong, lat, long) + Number.EPSILON) * 100) / 100;
    return <PricingFragment id={id} title={title} title_img={title_img} dist={dist} likes_hash_tags={likes_hash_tags} />
  })



  return (
    <IconContext.Provider value={{ color: '#FAD79B', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>서비스 맛보기</PricingHeading>
          <PricingContainer >
            

            {priceMap} 
            

          </PricingContainer>
          <PricingBottom>지금 내 주변의 카페를 알고싶다면？</PricingBottom>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;