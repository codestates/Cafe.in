import React, { useEffect, useState } from "react";
import { Container, Button } from "../../assets/styles/GlobalStyle";
import { ReactComponentElement } from "react";
import * as Styled from "./MainInfoSection.styled";
import imgurl from "../../assets/images/png4.png";
import imgurl2 from "../../assets/images/png1.png";
import imgurl3 from "../../assets/images/png2.png";
import hashtag from "../../assets/images/hashtag.svg";

const MainInfoSection = ({ location, homeObjOne }) => {
  return (
    <>
      <Styled.InfoSec lightBg={homeObjOne.lightBg}>
        <Container>
          <Styled.InfoRow imgStart={homeObjOne.imgStart}>
            <Styled.TextWrapper>
              <Styled.TopLine lightTopLine={homeObjOne.lightTopLine}>
                {homeObjOne.topLine}
              </Styled.TopLine>
              <Styled.Img4 src={hashtag} alt="main-logo" />{" "}
              <Styled.Heading lightText={homeObjOne.lightText}>
                {homeObjOne.headline}
              </Styled.Heading>
              <Styled.Subtitle lightTextDesc={homeObjOne.lightTextDesc}>
                {homeObjOne.description}
              </Styled.Subtitle>
            </Styled.TextWrapper>
            <Styled.InfoColumn>
              <Styled.ImgWrapper start={homeObjOne.start}>
                <Styled.Img src={imgurl} alt="main-logo" />
                <Styled.Img2 src={imgurl2} />
                <Styled.Img3 src={imgurl3} />
              </Styled.ImgWrapper>
            </Styled.InfoColumn>
          </Styled.InfoRow>
        </Container>
      </Styled.InfoSec>
    </>
  );
};

export default MainInfoSection;
