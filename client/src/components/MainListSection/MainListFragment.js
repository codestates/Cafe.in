import React from "react";
import * as Styled from "./MainListSection.styled";
import { distanceCalc } from "../../utils/DistCalculator";
// import Hashtag from "./Hashtag";

const MainListFragment = ({
  title,
  title_img,
  dist,
  likes_hash_tags
}) => {
  const hashtags = likes_hash_tags.map((hashtag) => {
    return <Styled.MainSectionCardFeatures key={hashtag}>{hashtag}</Styled.MainSectionCardFeatures>
  });

  return (
    <Styled.MainSectionContainer>
      <Styled.MainSectionCard>
        <Styled.MainSectionCardInfo>
          <Styled.MainSectionCardIcon>
            <Styled.ImgWrapper>
              <Styled.Img src={title_img} alt="타이틀 이미지" />
            </Styled.ImgWrapper>
          </Styled.MainSectionCardIcon>
          <Styled.MainSectionCardPlan>{title}</Styled.MainSectionCardPlan>
          <Styled.MainSectionCardExp></Styled.MainSectionCardExp>
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
