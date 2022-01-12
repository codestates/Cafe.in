import React, { useState } from "react";
import * as S from "./CafeHashtagMain.styled";
import { Button } from "../../assets/styles/GlobalStyle";
import HashtagInputSection from "./HashtagInputSection";
import { options } from "./DummyDataHashtag";
import heartIcon from "../../assets/images/heart-black-empty.svg";

const HashtagHalfSection = ({
  type,
  titleImg,
  hashtagBg,
  hashtagArray,
  positive,
  negative,
  userPick,
}) => {
  // 해시태그 list wrapper에 쓸 className 등등 state들
  const [divSize, setDivSize] = useState("short-div");
  const [showMoreText, setShowMoreText] = useState("해시태그 더보기 >");
  const [sliceIndex, setSliceIndex] = useState(3);

  // Dropdown에 쓸 State
  const [selected, setSelected] = useState({
    [type]: "",
  });

  // Input Section의 Input text 값
  const [inputText, setInputText] = useState({
    [type]: "",
  });
  // console.log("category", selected, "inputText", inputText);

  const handleFinalSubmit = () => {
    //! submit 버튼 누르면 처리할 것. 코드 추가 예정
    // let concatHashtag = selected[type] + " " + inputText[type];
    //! select[type]은 obj.category, inputText[type]은 obj.name으로 서버로 보내준다.
  };

  // 해시태그 길이가 3보다 기냐?
  let hashtagsLength = positive && positive.length;
  let isLongerThan3 = hashtagsLength > 3;

  const userClickedHeart = userPick && userPick.map((fill) => fill.like_id);
  // 해시태그 List rendering
  const hashtagListMap =
    type === "good" &&
    positive &&
    positive.map((hashtagElement, index) => {
      return (
        <S.CafeRank key={index}>
          {index + 1}.{" "}
          <S.CafeRankBox bgColor={hashtagBg}>
            #{hashtagElement.category + " " + hashtagElement.name}
          </S.CafeRankBox>
          <S.CafeRankCounts>{hashtagElement.counts}</S.CafeRankCounts>
          {userClickedHeart &&
          userClickedHeart.findIndex((res) => res === hashtagElement.id) === -1
            ? "♡"
            : "♥"}
          {/* <img src={heartIcon} alt="heart-icon" /> */}
        </S.CafeRank>
      );
    });

  const hashtagListMap2 =
    type === "bad" &&
    negative &&
    negative.map((hashtagElement, index) => {
      return (
        <S.CafeRank key={index}>
          {index + 1}.{" "}
          <S.CafeRankBox bgColor={hashtagBg}>
            #{hashtagElement.category + " " + hashtagElement.name}
          </S.CafeRankBox>
          <S.CafeRankCounts>{hashtagElement.counts}</S.CafeRankCounts>
          <img src={heartIcon} alt="heart-icon" />
        </S.CafeRank>
      );
    });
  // const hashtagListMap = hashtagArray
  //   .slice(0, sliceIndex)
  //   .map((hashtagElement, index) => {
  //     return (
  //       <S.CafeRank key={index}>
  //         {index + 1}.{" "}
  //         <S.CafeRankBox bgColor={hashtagBg}>
  //           {hashtagElement.category + " " + hashtagElement.name}
  //         </S.CafeRankBox>
  //         <S.CafeRankCounts>{hashtagElement.counts}</S.CafeRankCounts>
  //         <img src={heartIcon} alt="heart-icon" />
  //       </S.CafeRank>
  //     );
  //   });

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
  console.log(hashtagListMap && hashtagListMap.length);
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
            <h4>아직 태그가 없어요!</h4>
            <p>가게에 대한 첫 태그를 달아보세요!</p>
          </>
        ) : (
          hashtagListMap
        )}
        {hashtagListMap2 && hashtagListMap2.length === 0 ? (
          <>
            <h4>아직 태그가 없어요!</h4>
            <p>가게에 대한 첫 태그를 달아보세요!</p>
          </>
        ) : (
          hashtagListMap2
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
