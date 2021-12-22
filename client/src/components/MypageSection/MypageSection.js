import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import imgurl from '../../images/profile.png'
import { IconContext } from "react-icons/lib";

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
  Img
} from './MypageSection.elements';

const MypageSection =  (
  { loginInfo, 
  lightBg,
  lightTopLine,
  lightText,
  lightTextDesc,
  name,nickname,id,
  buttonLabel1,buttonLabel2,buttonLabel3,
  imgStart,
  start
}) => {
  // console.log(loginInfo)
  return (
    <IconContext.Provider value={{ color: "#472d0c" }}>
      <MypageSec lightBg={lightBg}>
        <Container>
        <Header className="header"> <NameIconUser/>Welcome Cafe In {loginInfo.email} ! 
          </Header>
          <MypageRow imgStart={imgStart}>
          <MypageColumn>
              <ImgWrapper start={start}>
                <Img src={imgurl} />
              </ImgWrapper>  
            </MypageColumn>
            <MypageColumn>
              <TextWrapper>     
                    
                <Id lightTopLine={lightTopLine}><NameIcon/>E-mail :  {loginInfo.email}</Id>
                <Nickname lightTextDesc={lightTextDesc}><NameIcon/>Nickname :  {loginInfo.nickname}</Nickname> 
                <Link to='/sign-up'>
               <Button>
                    {buttonLabel1}
                  </Button>
                </Link>
              </TextWrapper> 
            </MypageColumn> 
          </MypageRow>
          <MypageSec2>
      <Link to='/sign-up'>
                  <Button>
                 {buttonLabel3}
                  </Button>
                </Link>
        </MypageSec2>
        </Container>
      </MypageSec>
    </IconContext.Provider >
  );
}

export default MypageSection ;
