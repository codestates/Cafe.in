import React from 'react';
import { IconContext } from 'react-icons/lib';
import {
  MainSectionSection,
  MainSectionWrapper,
  MainSectionContainer,
} from './MainSection.elements';
import MainSectionFragment from './MainSectionFragment';
import { distanceCalc } from './DistCalculator.js';
import { dummyData, currentLocation } from './MainSectionDummyData';

function MainSection() {

  // axios 요청으로 JSON을 받아와서 array+object형태로 바꾼다.
  // 여기서는 dummy data 이용
  const { lat: currLat, long: currLong} = currentLocation;

  const priceMap = dummyData.map(({id,title, title_img, lat, long, likes_hash_tags}) => {
    let dist = Math.round((distanceCalc(currLat, currLong, lat, long) + Number.EPSILON) * 100) / 100;
    console.log('dist', dist);
    return <MainSectionFragment id={id} title={title} title_img={title_img} dist={dist} likes_hash_tags={likes_hash_tags} />
  })



  return (
    <IconContext.Provider value={{ color: '#FAD79B', size: 64 }}>
      <MainSectionSection>
        <MainSectionWrapper>
          <MainSectionContainer > 
          
          {priceMap}
      
          </MainSectionContainer>
        </MainSectionWrapper>
      </MainSectionSection>
    </IconContext.Provider>
  );
}
export default MainSection;