import React, { useState } from "react";
import * as S from "./CafeHashtagMain.styled";
import HashtagInputSection from "./HashtagInputSection";
import { options } from "./DummyDataHashtag";
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const HashtagHalfSection = ({ type, titleImg, hashtagBg, hashtagArray }) => {
  // 해시태그 list wrapper에 쓸 className 등등 state들
  const [divSize, setDivSize] = useState("short-div");
  const [showMoreText, setShowMoreText] = useState("해시태그 더보기 >");
  const [sliceIndex, setSliceIndex] = useState(3);

  // Dropdown에 쓸 State
  const [selected, setSelected] = useState({
    [type]: "",
  });

    
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
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
  let hashtagsLength = hashtagArray.length;
  let isLongerThan3 = hashtagsLength > 3;


  // 해시태그 List rendering
  const hashtagListMap = hashtagArray
    .slice(0, sliceIndex)
    .map((hashtagElement, index) => {
      return (
        <S.CafeRank key={index}>
          <S.Rankdiv bgColor={hashtagBg}>
          {index + 1}.{" "}
          <S.CafeRankBox>
            {hashtagElement.category + " " + hashtagElement.name}
            </S.CafeRankBox>
            </S.Rankdiv>

          <S.Buttonheart onClick={handleClick}>
               {click ? <FaRegHeart/> : <FaHeart />}
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
        {hashtagListMap}
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