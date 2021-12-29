import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import imgurl from "../../images/profile.png";
import { IconContext } from "react-icons/lib";
import Modal from "../Forms/Modal";

import {
  MypageSec,
  MypageSec2,
  MypageRow,
  MypageColumn,
  TextWrapper,
  Name,
  NameIcon,
  NameIconUser,
  Id,
  Nickname,
  Header,
  ImgWrapper,
  Img,
} from "./MypageSection.elements";

const MypageSection = ({
  loginInfo,
  lightBg,
  lightTopLine,
  lightText,
  lightTextDesc,
  name,
  nickname,
  id,
  buttonLabel1,
  buttonLabel2,
  buttonLabel3,
  imgStart,
  start,
}) => {
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
      <MypageSec lightBg={lightBg}>
        <Container>
          <Header className="header">
            {" "}
            <NameIconUser />
            Welcome Cafe In {loginInfo.email} !
          </Header>
          <MypageRow imgStart={imgStart}>
            <MypageColumn>
              <ImgWrapper start={start}>
                <Img src={imgurl} />
              </ImgWrapper>
            </MypageColumn>
            <MypageColumn>
              <TextWrapper>
                <Id lightTopLine={lightTopLine}>
                  <NameIcon />
                  Id : {loginInfo.email}
                </Id>
                <Nickname lightTextDesc={lightTextDesc}>
                  <NameIcon />
                  Nickname : {loginInfo.nickname}
                </Nickname>

                <Button onClick={openPwdChange}>{buttonLabel1}</Button>
              </TextWrapper>
            </MypageColumn>
          </MypageRow>
          <MypageSec2>
            <Button onClick={openDelAccount}>{buttonLabel3}</Button>
          </MypageSec2>
        </Container>
      </MypageSec>

      <Modal
        clickedMenu={clickedMenu}
        showModal={showModal}
        setShowModal={setShowModal}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </IconContext.Provider>
  );
};

export default MypageSection;
