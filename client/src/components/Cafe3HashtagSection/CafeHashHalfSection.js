import React, { useState } from "react";
import * as S from "./CafeHashtagMain.styled";
import HashtagInputSection from "./HashtagInputSection";
import { options } from "./DummyDataHashtag";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  login,
  showModal,
  loginUserInfo,
  getCafeInfo,
} from "../../store/actions";
import { useNavigate } from "react-router-dom";

const HashtagHalfSection = ({
  type,
  titleImg,
  hashtagBg,
  hashtagArray,
  userPick,
}) => {
  const { id } = useParams();
  // 해시태그 list wrapper에 쓸 className 등등 state들
  const [divSize, setDivSize] = useState("short-div");
  const [showMoreText, setShowMoreText] = useState("해시태그 더보기 >");
  const [sliceIndex, setSliceIndex] = useState(3);

  const userId = useSelector((state) => state.userInfo.userInfo?.id);
  const isLogin = useSelector((state) => state.isLogin.isLogin);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Dropdown에 쓸 State
  const [selected, setSelected] = useState({
    [type]: "",
  });
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  // Input Section의 Input text 값
  const [inputText, setInputText] = useState({
    [type]: "",
  });
  // console.log("category", selected, "inputText", inputText);

  const handleFinalSubmit = () => {
    // console.log(selected);
    // console.log(inputText);

    axios
      .post(
        `http://localhost:8080/posts/add-hashtag/${isLogin}`,
        {
          hashtag: inputText[type],
          category: selected[type].split("#")[1],
          type,
          postid: id,
        },
        {
          withCredentials: true,
          "Content-Type": "applicaton/json",
        }
      )
      .then((res) => {
        setSelected({
          [type]: "",
        });
        setInputText({
          [type]: "",
        });
        dispatch(getCafeInfo(id, isLogin));
      })
      .catch((e) => {
        if (e.response.data.type === "noHash")
          return alert(e.response.data.message);
        if (e.response.data.type === "noCate")
          return alert(e.response.data.message);
        if (e.response.data.type === "already")
          return alert(e.response.data.message);
        if (e.response.data.type === "needToLogin")
          return alert("로그인 후 해시태그를 입력해보세요");
        //위의 오류종류 빼고 나는 오류는 예상치 못한 거던가 쿠키 시간이 끝났거나
        //이런 식으로 구분하면 너무 길어질 것 같다.. 더 좋은 방법은 없을까?
        dispatch(login(false));
        dispatch(showModal(false));
        dispatch(loginUserInfo(null));
        navigate("/");
      });
  };

  // 해시태그 길이가 3보다 기냐?
  let hashtagsLength = hashtagArray && hashtagArray.length;
  let isLongerThan3 = hashtagsLength > 3;
  const userClickedHeart =
    userPick && userPick.filter((fill) => fill.post_id === Number(id));
  //const userClickedHeart = userPick && userPick.map((fill) => fill.like_id);
  const addLike = (hashId) => {
    axios
      .post(
        `http://localhost:8080/posts/hashtag-click/${isLogin}`,
        {
          userId,
          postId: id,
          hashId,
          type,
          //user state에서 id를 가져와주면 됨. 지금은 user관련을 다 날려서 1로 고정함
        },
        {
          "Content-Type": "applicaton/json",
          withCredentials: true,
        }
      )
      .then(() => {
        // console.log("좋아요 눌렀어요호호");
        dispatch(getCafeInfo(id, isLogin));
      })
      .catch((e) => {
        if (e.response.data.type === "needToLogin")
          return alert(e.response.data.message);
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
        axios
          .post("http://localhost:8080/users/sign-out", null, {
            withCredentials: true,
          })
          .then(() => {
            dispatch(login(false));
            dispatch(showModal(false));
            dispatch(loginUserInfo(null));
            navigate("/");
          });
      });
  };

  const removeLike = (hashid) => {
    axios
      .post(
        "http://localhost:8080/posts/remove-hashtag",
        {
          hashid,
          postid: id,
          type,
        },
        {
          "Content-Type": "applicaton/json",
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(getCafeInfo(id, isLogin));
        console.log(res.data.message);
      });
  };

  //positive= [], negative = []
  // 해시태그 List rendering
  const hashtagListMap =
    hashtagArray &&
    hashtagArray.slice(0, sliceIndex).map((hashtagElement, index) => {
      return (
        <S.CafeRank key={index}>
          <S.Rankdiv
            bgColor={hashtagBg}
            onClick={() => removeLike(hashtagElement.id)}
          >
            {index + 1}.{" "}
            <S.CafeRankBox>
              #{hashtagElement.category + " " + hashtagElement.name}
            </S.CafeRankBox>
          </S.Rankdiv>

          <S.Buttonheart
            onClick={() => addLike(hashtagElement.id)}
            style={{ cursor: "pointer" }}
          >
            {userClickedHeart &&
            userClickedHeart.findIndex(
              (res) => res.like_id === hashtagElement.id
            ) === -1 ? (
              <FaRegHeart />
            ) : (
              <FaHeart />
            )}
            {/* {click ? <FaRegHeart /> : <FaHeart />} */}
          </S.Buttonheart>

          <S.CafeRankCounts>{hashtagElement.counts}</S.CafeRankCounts>
        </S.CafeRank>
      );
    });

  // Section Wrapper className 바꾸기용 + 텍스트 변경용
  const makeDivLonger = () => {
    if (divSize === "short-div") {
      setDivSize("long-div");
      setShowMoreText("< 다시 Top3만 보기");
      setSliceIndex(hashtagsLength);
    } else {
      setDivSize("short-div");
      setShowMoreText("해시태그 더보기 >");
      setSliceIndex(3);
    }
  };

  return (
    <S.CafeHashtagSectionWrapper>
      <S.CafeImg src={titleImg} />

      <S.CafemoreWrapper onClick={makeDivLonger}>
        {isLongerThan3 ? (
          <S.Cafemore>{showMoreText}</S.Cafemore>
        ) : (
          <S.Cafemore>&nbsp;</S.Cafemore>
        )}
      </S.CafemoreWrapper>

      <S.CafeListWrapper className={divSize}>
        {hashtagListMap && hashtagListMap.length === 0 ? (
          <>
            <h2
              style={{
                paddingTop: "20px",
                marginBottom: "10px",
                color: "grey",
              }}
            >
              아직 태그가 없어요!
            </h2>
            <br />
            <p style={{ color: "#9f9582" }}>
              가게에 대한 첫 태그를 달아보세요!
            </p>
          </>
        ) : (
          hashtagListMap
        )}
      </S.CafeListWrapper>

      <S.HashtagInputWrapper>
        <HashtagInputSection
          type={type}
          selected={selected}
          setSelected={setSelected}
          options={options}
          inputText={inputText}
          setInputText={setInputText}
          handleFinalSubmit={handleFinalSubmit}
        />
      </S.HashtagInputWrapper>
    </S.CafeHashtagSectionWrapper>
  );
};

export default HashtagHalfSection;
