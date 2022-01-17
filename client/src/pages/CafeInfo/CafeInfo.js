import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./CafeInfo.styled";
import { useSelector, useDispatch } from "react-redux";
import { login, showModal, loginUserInfo } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { postCountResetAction } from "../../store/actions";

import { Cafe1ImageSection } from "../../components";
import { Cafe2InfoSection } from "../../components";
import { Cafe3HashtagSection } from "../../components";
import { Cafe4MapSection } from "../../components";

import axios from "axios";

const CafeInfo = () => {
  const { id } = useParams();
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const search = (num) => dummyData.find((key) => key.id === num);
  // const cafe = search(Number(id));
  // const img =
  //   "https://images.squarespace-cdn.com/content/v1/5bfdafa63917eec8bc387b85/1560564506941-8HTL1GRDEX0UKW0964YT/APC_0050.JPG?format=2500w";
  // const dummyinfo =
  //   "주소: 부산시 해운대 수심 200미터, 전화번호: 032-8282-8282, 영업시간: 폐업중, 주차: 트럭도 주차 쌉가능";
  const [clicked, setClicked] = useState(false);
  const [cafeInfo, setCafeInfo] = useState(null);
  const [positive, setPositive] = useState(null);
  const [negative, setNegative] = useState(null);
  const [userPick, setUserPick] = useState(null);
  const [langLung, setLangLung] = useState([]);

  useEffect(() => {
    id &&
      axios
        .get(`http://localhost:8080/posts/cafe-info/${id}/${isLogin}`, {
          withCredentials: true,
        })
        .then((res) => {
          setCafeInfo(res.data.data.selectedPost);
          setPositive(res.data.data.positiveTag);
          setNegative(res.data.data.negativeTag);
          setUserPick(res.data.data.getHashtagUserId);
          setLangLung([
            Number(res.data.data.selectedPost.lat),
            Number(res.data.data.selectedPost.long),
          ]);
        })
        .catch((e) => {
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");

          dispatch(login(false));
          dispatch(showModal(false));
          dispatch(loginUserInfo(null));
          dispatch(postCountResetAction());
          navigate("/");
        });
  }, [clicked, id]);

  const clickHandle = () => {
    setClicked((prev) => !prev);
  };

  const center = {
    lat: langLung[0],
    lng: langLung[1],
  };

  const containerStyle = {
    width: "500px",
    height: "500px",
  };

  return (
    <>
      {!cafeInfo ? (
        <div>로딩즁</div>
      ) : (
        <>
          <S.Cafe1ImageWrapper>
            <Cafe1ImageSection
              img={cafeInfo.large_img}
              title={cafeInfo.title}
            />
          </S.Cafe1ImageWrapper>
          <S.CafePageContainer>
            <S.Cafe2InfoWrapper>
              <Cafe2InfoSection data={cafeInfo} />
            </S.Cafe2InfoWrapper>

            <S.Cafe3HashtagWrapper>
              <Cafe3HashtagSection
                positive={positive}
                negative={negative}
                userPick={userPick}
                clickHandle={clickHandle}
              />
            </S.Cafe3HashtagWrapper>

            <S.Cafe4MapWrapper>
              {/* <Cafe4MapSection lat={center.lat} lng={center.lng} /> */}
              {process.env.REACT_APP_ENV_GOOGLE_MAP === "no" ? null : (
                <Cafe4MapSection lat={center.lat} lng={center.lng} />
              )}
            </S.Cafe4MapWrapper>
          </S.CafePageContainer>{" "}
        </>
      )}
    </>
  );
};

export default CafeInfo;
