import React from "react";
import { IconContext } from "react-icons/lib";
import {
  MainSectionSection,
  MainSectionWrapper,
  MainSectionContainer,
} from "./MainSection.elements";
import MainSectionFragment from "./MainSectionFragment";
import { distanceCalc } from "./DistCalculator.js";
import { dummyData, currentLocation } from "./MainSectionDummyData";

function MainSection({ main, mainSearchHandle }) {
  // axios 요청으로 JSON을 받아와서 array+object형태로 바꾼다.
  // 여기서는 dummy data 이용
  return (
    <IconContext.Provider value={{ color: "#FAD79B", size: 64 }}>
      <MainSectionSection>
        {main === null ? (
          <h3>로딩중</h3>
        ) : (
          main.map((fill) => {
            return (
              <MainSectionFragment
                id={fill.id}
                title={fill.title}
                title_img={fill.title_img}
                likes_hash_tags={fill.likes_hash_tags}
                lat={fill.lat}
                long={fill.long}
                mainSearchHandle={mainSearchHandle}
              />
            );
          })
        )}
      </MainSectionSection>
    </IconContext.Provider>
  );
}
export default MainSection;

// {!main ? (
//   <h3>로딩중</h3>
// ) : (
//   main.map((fill) => {
//     return (
//       <MainSectionFragment
//         contents={fill}
//         key={fill.id}
//         mainSearchHandle={mainSearchHandle}
//       />
//     );
//   })
// )}
