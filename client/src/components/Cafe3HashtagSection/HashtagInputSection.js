import React, { useState } from "react";
import { Button } from "../../assets/styles/GlobalStyle";
import * as S from "./CafeHashtagMain.styled";

const HashtagInputSection = ({ type, selected, setSelected, options, inputText, setInputText, handleFinalSubmit }) => {
  const renderedOptions = options.map((option) => {
    return (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    );
  });

  const handleCategory = (key) => (e) => {
    setSelected({...selected, [key]:e.target.value})
  }
  const handleInputValue = (key) => (e) => {
    setInputText({...inputText, [key]: e.target.value});
  }
  const handleSubmit = () => {
    // 태그 유효성 검사 들어갈 자리
    handleFinalSubmit();
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <S.DropdownMenu
        value={selected[type]}
        onChange={handleCategory(type)}
      >
        <option value="">카테고리</option>
        {renderedOptions}
      </S.DropdownMenu>
      <S.Input
        type="text"
        placeholder="리뷰를 입력하세요"
        onChange={handleInputValue(type)}
        value={inputText[type]}
      />
      <Button type="button" onClick={handleSubmit}>입력</Button>
    </form>
  );
};

export default HashtagInputSection;
