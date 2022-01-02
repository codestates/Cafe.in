import React from "react";
import { Container, Button } from "../../GlobalStyle";
import { MainInfoSection as Styled } from "./MainInfoSection.styled";
import imgurl from "../../assets/images/svg-1.svg";

const MainInfoSection = ({ homeObjOne }) => {
  return (
    <>
      <Styled.InfoSec lightBg={homeObjOne.lightBg}>
        <Container>
          <Styled.InfoRow imgStart={homeObjOne.imgStart}>
            <Styled.InfoColumn>
              <Styled.ImgWrapper start={homeObjOne.start}>
                <Styled.Img src={imgurl} />
              </Styled.ImgWrapper>
            </Styled.InfoColumn>
            <Styled.InfoColumn>
              <Styled.TextWrapper>
                <Styled.TopLine lightTopLine={homeObjOne.lightTopLine}>
                  {homeObjOne.topLine}
                </Styled.TopLine>
                <Styled.Heading lightText={homeObjOne.lightText}>
                  {homeObjOne.headline}
                </Styled.Heading>
                <Styled.Subtitle lightTextDesc={homeObjOne.lightTextDesc}>
                  {homeObjOne.description}
                </Styled.Subtitle>
                <Button big fontBig primary={homeObjOne.primary}>
                  {homeObjOne.buttonLabel}
                </Button>
              </Styled.TextWrapper>
            </Styled.InfoColumn>
          </Styled.InfoRow>
        </Container>
      </Styled.InfoSec>
    </>
  );
};

export default MainInfoSection;
