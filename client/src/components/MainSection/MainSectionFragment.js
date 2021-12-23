import React from "react";
import {
  MainSectionContainer,
  MainSectionCard,
  MainSectionCardInfo,
  MainSectionCardIcon,
  MainSectionCardPlan,
  MainSectionCardExp,
  MainSectionCardLength,
  MainSectionCardFeatures,
  ImgWrapper,
  Img,
  HashtagSelect,
} from "./MainSection.elements";
import { distanceCalc } from "./DistCalculator.js";
import Hashtag from "./Hashtag";

const MainSectionFragment = ({
  title,
  title_img,
  likes_hash_tags,
  mainSearchHandle,
  lat,
  long,
}) => {
  let dist = Math.round((distanceCalc(lat, long) + Number.EPSILON) * 100) / 100;

  return (
    <MainSectionContainer>
      <MainSectionCard>
        <MainSectionCardInfo>
          <MainSectionCardIcon>
            <ImgWrapper>
              <Img src={title_img} alt="타이틀 이미지" />
            </ImgWrapper>
          </MainSectionCardIcon>
          <MainSectionCardPlan>{title}</MainSectionCardPlan>
          <MainSectionCardExp></MainSectionCardExp>
          <MainSectionCardLength>{dist} km</MainSectionCardLength>
          <MainSectionCardFeatures>
            {likes_hash_tags.map((fill) => {
              return (
                <HashtagSelect>
                  <Hashtag
                    text={fill.name}
                    id={fill.id}
                    mainSearchHandle={mainSearchHandle}
                  />
                </HashtagSelect>
              );
            })}
          </MainSectionCardFeatures>
        </MainSectionCardInfo>
      </MainSectionCard>
    </MainSectionContainer>
  );
};

export default MainSectionFragment;
