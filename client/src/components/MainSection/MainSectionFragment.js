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
  Img
} from "./MainSection.elements";

const MainSectionFragment = ({ id, title, title_img, dist, likes_hash_tags }) => {

  const hashtags = likes_hash_tags.map((hashtag) => {
    return <> {hashtag}<br/> </>
  });

  return (
    <MainSectionContainer > 
    <MainSectionCard>
      <MainSectionCardInfo>
        <MainSectionCardIcon>
          <ImgWrapper>
            <Img src={title_img} alt={title} />
          </ImgWrapper>
        </MainSectionCardIcon>
        <MainSectionCardPlan>{title}</MainSectionCardPlan>
        <MainSectionCardExp></MainSectionCardExp>
        <MainSectionCardLength>{dist} km</MainSectionCardLength>
        <MainSectionCardFeatures>
          {hashtags}
        </MainSectionCardFeatures>
      </MainSectionCardInfo>
    </MainSectionCard> 
    </MainSectionContainer > 
  );

};

export default MainSectionFragment;