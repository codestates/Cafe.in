import React from 'react';
import {
  FaGithub,
} from 'react-icons/fa';

import * as S from './Footer.styled.js';

const Footer = () => {

  return (
    <>
    <S.FooterContainer>

      <S.FooterLinksContainer>
        <S.FooterLinksWrapper>

          <S.FooterLinkItems>
            <S.FooterLinkTitle>About Us</S.FooterLinkTitle>
            <S.FooterLink to='/#'>소개</S.FooterLink>
            <S.FooterLink to='/#'>이용하기</S.FooterLink>
            <S.FooterLink to='/#'>Contact</S.FooterLink>
          </S.FooterLinkItems>

        </S.FooterLinksWrapper>

        <S.FooterLinksWrapper>
          <S.FooterLinkItems>
            <S.FooterLinkTitle>Crew</S.FooterLinkTitle>
            <S.FooterLink to='/#' > <FaGithub /> 문기훈</S.FooterLink>
            <S.FooterLink to='/#' > <FaGithub /> 양승준</S.FooterLink>
            <S.FooterLink to='/#' > <FaGithub /> 김윤재</S.FooterLink>
            <S.FooterLink to='/' > <FaGithub /> 박세현</S.FooterLink>
          </S.FooterLinkItems>
        </S.FooterLinksWrapper>

      </S.FooterLinksContainer>

      <S.SocialMedia>
        <S.SocialMediaWrap>  
          <S.SocialLogo to='/#'>
             <S.SocialIcon /> cafe in
          </S.SocialLogo>
       <S.WebsiteRights> CafeIn © 2021</S.WebsiteRights>
        </S.SocialMediaWrap>
      </S.SocialMedia>

    </S.FooterContainer>
    </>
  );
}

export default Footer;
