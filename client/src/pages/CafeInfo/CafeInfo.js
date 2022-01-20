import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./CafeInfo.styled";
import { useSelector, useDispatch } from "react-redux";
import { getCafeInfo } from "../../store/actions";
import Cafe1ImageSection from "./Cafe1ImageSection/CafeImageSection";
import Cafe2InfoSection from "./Cafe2InfoSection/CafeInfoDetail";
import Cafe3HashtagSection from "./Cafe3HashtagSection/CafeHashtagMain";
import Cafe4MapSection from "./Cafe4MapSection/CafeMapSection";
import Spinner from '../../assets/styles/Spinner.js';

const CafeInfo = () => {
  const { id } = useParams();
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const isLoading = useSelector((state) => state.cafeInfoReducer.isLoading);
  const cafeInfo = useSelector((state) => state.cafeInfoReducer);
  const selectedPost = useSelector((state) => state.cafeInfoReducer.selectedPost);
  const positiveTag = useSelector((state) => state.cafeInfoReducer.positiveTag);
  const negativeTag = useSelector((state) => state.cafeInfoReducer.negativeTag);
  const getHashtagUserId = useSelector(
    (state) => state.cafeInfoReducer.getHashtagUserId
  );
  const dispatch = useDispatch();

  useEffect(() => {
    id && dispatch(getCafeInfo(id, isLogin));
  }, [id]);

  return (
    <>
      {isLoading ? (
              <Spinner />
      ) : (
        cafeInfo && (
          <>
            <S.Cafe1ImageWrapper>
              <Cafe1ImageSection
                img={selectedPost.large_img}
                title={selectedPost.title}
              />
            </S.Cafe1ImageWrapper>
            <S.CafePageContainer>
              <S.Cafe2InfoWrapper>
                <Cafe2InfoSection data={selectedPost} />
              </S.Cafe2InfoWrapper>

              <S.Cafe3HashtagWrapper>
                <Cafe3HashtagSection
                  positive={positiveTag}
                  negative={negativeTag}
                  userPick={getHashtagUserId}
                />
              </S.Cafe3HashtagWrapper>

              <S.Cafe4MapWrapper>
                {process.env.REACT_APP_ENV_GOOGLE_MAP === "no" ? null : (
                  <Cafe4MapSection
                    lat={Number(selectedPost.lat)}
                    lng={Number(selectedPost.long)}
                  />
                )}
              </S.Cafe4MapWrapper>
            </S.CafePageContainer>{" "}
          </>
        )
      )}
    </>
  );
};

export default CafeInfo;
