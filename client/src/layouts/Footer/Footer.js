import React from 'react';
import {
  FaGithub,　FaPhone
} from 'react-icons/fa';

import * as S from './Footer.styled.js';

const Footer = () => {

  return (
    <>
    <S.FooterContainer>

      <S.FooterLinksContainer>

        <S.FooterLinksWrapper>
          <S.FooterLinkItems>
            <S.TeamInfo>Back-end</S.TeamInfo>
            <S.FooterLink href="https://github.com/kihunism" > <FaGithub /> 문기훈</S.FooterLink>
          </S.FooterLinkItems>
        </S.FooterLinksWrapper>

        <S.FooterLinksWrapper>
          <S.FooterLinkItems>
            <S.TeamInfo>Back-end</S.TeamInfo>
            <S.FooterLink href="https://github.com/Tarosism" > <FaGithub /> 양승준</S.FooterLink>
          </S.FooterLinkItems>
        </S.FooterLinksWrapper>

        <S.FooterLinksWrapper>
          <S.FooterLinkItems>
            <S.TeamInfo>Front-end</S.TeamInfo>
            <S.FooterLink href="https://github.com/yunjaekim00" > <FaGithub /> 김윤재</S.FooterLink>
          </S.FooterLinkItems>
        </S.FooterLinksWrapper>

        <S.FooterLinksWrapper>
          <S.FooterLinkItems>
            <S.TeamInfo>Front-end</S.TeamInfo>
            <S.FooterLink href="https://github.com/park0866" > <FaGithub /> 박세현</S.FooterLink>
          </S.FooterLinkItems>
        </S.FooterLinksWrapper>

      </S.FooterLinksContainer>

      <S.SocialMedia>
        <S.SocialMediaWrap>  
          <S.SocialLogo to='/#'>
             <S.SocialIcon /> cafe in
          </S.SocialLogo>
          <S.WebsiteRights> CafeIn © 2021</S.WebsiteRights>
          <S.Contact><FaPhone></FaPhone> 02)1234-1234    
          <S.Dis>평일 및 토요일 09:00 ~ 18:00 (일요일, 공휴일 제외)</S.Dis> </S.Contact>
        </S.SocialMediaWrap>
      </S.SocialMedia>

    </S.FooterContainer>
    </>
  );
}

export default Footer;
