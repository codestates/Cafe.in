import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import imgurl from '../../images/profile.svg'

import {
  MypageSec,
  MypageSec2,
  MypageRow,
  MypageColumn,
  TextWrapper,
  Name,
  Id,
  Nickname,
  ImgWrapper,
  Img
} from './MypageSection.elements';

function MypageSection({
  primary,
  lightBg,
  lightTopLine,
  lightText,
  lightTextDesc,
  name,nickname,id,
  buttonLabel1,buttonLabel2,buttonLabel3,
  imgStart,
  start
}) {
  return (
    <>
      <MypageSec lightBg={lightBg}>
        <Container>
          <MypageRow imgStart={imgStart}>
          <MypageColumn>
              <ImgWrapper start={start}>
                <Img src={imgurl} />
              </ImgWrapper>  
            </MypageColumn>
            <MypageColumn>
              <TextWrapper>             
                <Name lightText={lightText}> 이름  : {name}</Name>
                <Id lightTopLine={lightTopLine}> 아이디 : {id}</Id>
                <Nickname lightTextDesc={lightTextDesc}>닉네임 : {nickname}</Nickname> 
              </TextWrapper> 
                <Link to='/sign-up'>
                  <Button>
                    {buttonLabel1}
                  </Button>
                </Link>
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
    </>
  );
}

export default MypageSection ;
