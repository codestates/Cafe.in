import React from "react";
import * as Styled from "./MainListSection.styled";
import { distanceCalc } from "../../../utils/helper/DistCalculator";
// import Hashtag from "./Hashtag";
import { useSelector, useDispatch } from "react-redux";
import { postCategoryAction, postCountResetAction } from "../../../store/actions";
import { Link } from "react-router-dom";

const MainListFragment = ({ id, title, title_img, dist, likes_hash_tags }) => {
  const dispatch = useDispatch();

  const hashSearch = (category) => {
    dispatch(postCategoryAction(category));
    dispatch(postCountResetAction());
  };

  const hashtags = likes_hash_tags.slice(0, 3).map((hashtag) => {
    return (
      <Styled.MainSectionCardFeatures
        key={hashtag.id}
        onClick={() => hashSearch(hashtag.category)}
      >
        #{hashtag.category}
        {hashtag.name}
      </Styled.MainSectionCardFeatures>
    );
  });

  return (
    <Styled.MainSectionContainer>
      <Styled.MainSectionCard>
        <Styled.MainSectionCardInfo>
          <Link to={`cafeinfo/${id}`}>
            <Styled.ImgWrapper>
              <Styled.Img src={title_img} alt="타이틀 이미지" />
            </Styled.ImgWrapper>
            <Styled.MainSectionCardPlan>{title}</Styled.MainSectionCardPlan>
            <Styled.MainSectionCardLength>
              {dist} km
            </Styled.MainSectionCardLength>
          </Link>
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
