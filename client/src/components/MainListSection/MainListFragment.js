import React from "react";
import * as Styled from "./MainListSection.styled";
import { distanceCalc } from "../../utils/DistCalculator";
// import Hashtag from "./Hashtag";

const MainListFragment = ({ id, title, title_img, dist, likes_hash_tags }) => {
  const hashtags = likes_hash_tags.slice(0, 3).map((hashtag) => {
    return (
      <Styled.MainSectionCardFeatures key={hashtag.id}>
        #{hashtag.category}
        {hashtag.name}
      </Styled.MainSectionCardFeatures>
    );
  });

  return (
    <Styled.MainSectionContainer>
      <Styled.MainSectionCard to={`cafeinfo/${id}`}>
        <Styled.MainSectionCardInfo>
          <Styled.ImgWrapper>
            <Styled.Img src={title_img} alt="타이틀 이미지" />
          </Styled.ImgWrapper>
          <Styled.MainSectionCardPlan>{title}</Styled.MainSectionCardPlan>
          <Styled.MainSectionCardLength>{dist} km</Styled.MainSectionCardLength>

          {hashtags}

          {/* {likes_hash_tags.map((fill) => {
              return (
                <Styled.HashtagSelect>
                  <Hashtag
                    text={fill.name}
                    id={fill.id}
                    mainSearchHandle={mainSearchHandle}
                  />
                </Styled.HashtagSelect>
              );
            })} */}
        </Styled.MainSectionCardInfo>
      </Styled.MainSectionCard>
    </Styled.MainSectionContainer>
  );
};

export default MainListFragment;
