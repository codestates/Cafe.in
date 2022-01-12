import React, { useState } from "react";
import { Container, Button } from "../../assets/styles/GlobalStyle";
// import imgurl from "../../assets/images/profile.png";
import { IconContext } from "react-icons/lib";
import ModalContainer from "../ModalContainer/ModalContainer";

import * as Styled from "./MypageSection.styled";
import { useSelector, useDispatch } from "react-redux";
import { clickModalType } from "../../store/actions";
// import { login } from "../../store/actions";

const MypageSection = ({ loginInfo, mypageObjOne }) => {
  // Redux
  const isLogin = useSelector(state => state.isLogin.isLogin);
  const modalType = useSelector((state) => state.modalType.clickedModalType);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  // const [clickedMenu, setClickedMenu] = useState(null);
  const openPwdChange = () => {
    // setClickedMenu("pwdchange");
    dispatch(clickModalType("pwdchange"));

    setShowModal((showModal) => !showModal);
  };
  const openDelAccount = () => {
    // setClickedMenu("delaccount");
    dispatch(clickModalType("delaccount"));
    setShowModal((showModal) => !showModal);
  };

  return (
    <>
      {loginInfo && (
        <IconContext.Provider value={{ color: "#472d0c" }}>
          <Styled.MypageSec lightBg={mypageObjOne.lightBg}>
            <Container>
              <Styled.Header className="header">
                {" "}
                Welcome Cafe In {loginInfo.email} !
              </Styled.Header>
              <Styled.MypageRow imgStart={mypageObjOne.imgStart}>
                <Styled.MypageColumn>
                  <Styled.ImgWrapper start={mypageObjOne.start}>
                    <Styled.Img src={mypageObjOne.img} />
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
                    <Button primary onClick={openPwdChange}>
                      {mypageObjOne.buttonLabel1}
                    </Button>
                    <Button primary> 프로필변경</Button>
                  </Styled.TextWrapper>
                </Styled.MypageColumn>
              </Styled.MypageRow>
              <Styled.MypageSec2>
                <Button onClick={openDelAccount}>
                  {mypageObjOne.buttonLabel3}
                </Button>
              </Styled.MypageSec2>
            </Container>
          </Styled.MypageSec>

          <ModalContainer
            
            showModal={showModal}
            setShowModal={setShowModal}
            
          />
        </IconContext.Provider>
      )}
    </>
  );
};

export default MypageSection;
