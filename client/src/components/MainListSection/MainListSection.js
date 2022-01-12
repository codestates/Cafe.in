import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import * as Styled from "./MainListSection.styled";
import MainListFragment from "./MainListFragment";
import { dummyData, currentLocation } from "./MainListDummyData";
import { distanceCalc } from "../../utils/DistCalculator";
import imgurl7 from "../../assets/images/png7.png";
import imgurl8 from "../../assets/images/menu.png";

const MainListSection = ({ list }) => {
  const listMap = !list ? (
    <div>로딩중</div>
  ) : (
    list.map((fill, idx) => {
      return <MainListFragment data={fill} idx={idx} />;
    })
  );

  return (
    <IconContext.Provider value={{ color: "#472d0c" }}>
      <Styled.MainSectionSection>
        <Styled.Img8 src={imgurl8} />
        {listMap}
      </Styled.MainSectionSection>
    </IconContext.Provider>
  );
};
export default MainListSection;
