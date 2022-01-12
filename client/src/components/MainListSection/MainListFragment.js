import React from "react";
import * as Styled from "./MainListSection.styled";
import { distanceCalc } from "../../utils/DistCalculator";
// import Hashtag from "./Hashtag";
import { useSelector, useDispatch } from "react-redux";

const MainListFragment = ({ data, idx }) => {
  const postState = useSelector((state) => state.postReducer);
  const { countHash } = postState;

  const distanceConversion = (length, type) => {
    let result = length;
    if (length >= 1000) result = (result / 1000).toFixed(1) + "k";
    return result + type;
  };
  // const hashtags = countHash[idx].map((hashtag) => {
  //   return (
  //     <Styled.MainSectionCardFeatures key={hashtag}>
  //       {hashtag}
  //     </Styled.MainSectionCardFeatures>
  //   );
  // });

  return (
    <Styled.MainSectionContainer>
      <Styled.MainSectionCard to={`/cafeInfo/${data.id}`}>
        <Styled.MainSectionCardInfo>
          <Styled.ImgWrapper>
            <Styled.Img src={data.small_img} alt="타이틀 이미지" />
          </Styled.ImgWrapper>
          <Styled.MainSectionCardPlan>{data.title}</Styled.MainSectionCardPlan>
          <Styled.MainSectionCardLength>
            {distanceConversion(data.distance, "m")}
          </Styled.MainSectionCardLength>

          {/* {hashtags} */}

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
