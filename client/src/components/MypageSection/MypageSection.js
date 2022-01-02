import React, { useState } from "react";
import { Container, Button } from "../../GlobalStyle";
import imgurl from "../../assets/images/profile.png";
import { IconContext } from "react-icons/lib";
import ModalContainer from "../ModalContainer/ModalContainer";

import * as Styled from "./MypageSection.styled";

const MypageSection = ({loginInfo, setIsLogin, mypageObjOne}) => {
  const [showModal, setShowModal] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(null);
  const openPwdChange = () => {
    setClickedMenu("pwdchange");
    setShowModal((showModal) => !showModal);
  };
  const openDelAccount = () => {
    setClickedMenu("delaccount");
    setShowModal((showModal) => !showModal);
  };

  return (
    <IconContext.Provider value={{ color: "#472d0c" }}>
      <Styled.MypageSec lightBg={mypageObjOne.lightBg}>
        <Container>
          <Styled.Header className="header">
            {" "}
            <Styled.NameIconUser />
            Welcome Cafe In {loginInfo.email} !
          </Styled.Header>
          <Styled.MypageRow imgStart={mypageObjOne.imgStart}>
            <Styled.MypageColumn>
              <Styled.ImgWrapper start={mypageObjOne.start}>
                <Styled.Img src={imgurl} />
              </Styled.ImgWrapper>
            </Styled.MypageColumn>
            <Styled.MypageColumn>
              <Styled.TextWrapper>
                <Styled.Id lightTopLine={mypageObjOne.lightTopLine}>
                  <Styled.NameIcon />
                  Id : {loginInfo.email}
                </Styled.Id>
                <Styled.Nickname lightTextDesc={mypageObjOne.lightTextDesc}>
                  <Styled.NameIcon />
                  Nickname : {loginInfo.nickname}
                </Styled.Nickname>

                <Button onClick={openPwdChange}>{mypageObjOne.buttonLabel1}</Button>
              </Styled.TextWrapper>
            </Styled.MypageColumn>
          </Styled.MypageRow>
          <Styled.MypageSec2>
            <Button onClick={openDelAccount}>{mypageObjOne.buttonLabel3}</Button>
          </Styled.MypageSec2>
        </Container>
      </Styled.MypageSec>

      <ModalContainer
        clickedMenu={clickedMenu}
        showModal={showModal}
        setShowModal={setShowModal}
        // isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </IconContext.Provider>
  );
};

export default MypageSection;
