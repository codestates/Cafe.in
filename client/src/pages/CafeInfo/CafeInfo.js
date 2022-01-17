import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./CafeInfo.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  showModal,
  loginUserInfo,
  getCafeInfo,
} from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { postCountResetAction } from "../../store/actions";

import { Cafe1ImageSection } from "../../components";
import { Cafe2InfoSection } from "../../components";
import { Cafe3HashtagSection } from "../../components";
import { Cafe4MapSection } from "../../components";

const CafeInfo = () => {
  const { id } = useParams();

  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const cafeInfo = useSelector((state) => state.cafeInfoReducer.data);
  const isLoading = useSelector((state) => state.cafeInfoReducer.loading);
  const error = useSelector((state) => state.cafeInfoReducer.error);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const search = (num) => dummyData.find((key) => key.id === num);
  // const cafe = search(Number(id));
  // const img =
  //   "https://images.squarespace-cdn.com/content/v1/5bfdafa63917eec8bc387b85/1560564506941-8HTL1GRDEX0UKW0964YT/APC_0050.JPG?format=2500w";

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    id && dispatch(getCafeInfo(id, isLogin));
    if (error === true) {
      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
      dispatch(login(false));
      dispatch(showModal(false));
      dispatch(loginUserInfo(null));
      dispatch(postCountResetAction());
      navigate("/");
    }
  }, [id]);

  // console.log(cafeInfo);

  return (
    <>
      {isLoading ? (
        <div>
          <h1>Loading in progress</h1>
        </div>
      ) : (
        cafeInfo && (
          <>
            <S.Cafe1ImageWrapper>
              <Cafe1ImageSection
                img={cafeInfo.selectedPost.large_img}
                title={cafeInfo.selectedPost.title}
              />
            </S.Cafe1ImageWrapper>
            <S.CafePageContainer>
              <S.Cafe2InfoWrapper>
                <Cafe2InfoSection data={cafeInfo.selectedPost} />
              </S.Cafe2InfoWrapper>

              <S.Cafe3HashtagWrapper>
                <Cafe3HashtagSection
                  positive={cafeInfo.positiveTag}
                  negative={cafeInfo.negativeTag}
                  userPick={cafeInfo.getHashtagUserId}
                />
              </S.Cafe3HashtagWrapper>

              <S.Cafe4MapWrapper>
                {process.env.REACT_APP_ENV_GOOGLE_MAP === "no" ? null : (
                  <Cafe4MapSection
                    lat={cafeInfo.selectedPost.lat}
                    lng={cafeInfo.selectedPost.long}
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
