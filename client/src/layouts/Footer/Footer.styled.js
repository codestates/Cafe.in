import styled from 'styled-components';
import { FaMugHot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color:${ ({theme}) => theme.colors.mainBackground };
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    padding-top: 42px;

  }
`;



export const FooterLinksContainer = styled.div`

  display: flex;
  align-items: center;
  width: 90%;
  max-width: 800px;


  @media screen and (max-width: 820px) {
   display:none;
  }

`;

export const FooterLinksWrapper = styled.div`
 display: flex;
 justify-content: space-between;
  align-items: center;

@media screen and (max-width: 820px) {
  flex-direction: column;
}
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.div`
  justify-content: center;
  text-align:center;
  align-items: center;
  margin-right:30px;
  margin-top:20px;
  font-size:30px;
  margin-bottom: 16px;
  color: ${ ({theme}) => theme.colors.cardBackground };
`;

export const FooterTitle = styled.h2`
  margin-bottom: 16px;
  text-align:center;
  align-items:center;

  color: ${ ({theme}) => theme.colors.cardBackground };
`;

export const FooterLink = styled.a`
  color:  ${ ({theme}) => theme.colors.buttonSecondary};
  font-weight:400;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
      color: #aaaaaa;
      transition: 200ms ease-in;
  }
`;

export const SocialMedia = styled.section`
  max-width: 800px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${ ({theme}) => theme.colors.cardBackground };
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMugHot)`
  margin-right: 10px;

`;

export const WebsiteRights = styled.small`
  color: ${ ({theme}) => theme.colors.cardBackground };
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const Dis = styled.div`
  display: flex;
  white-space:nowrap;
  width: 240px;
`;

export const TeamInfo = styled.div`
  white-space:nowrap;
  font-size: 18px;
  color: #E6C17B;
  font-weight:300;
  opacity:.7;
`;

export const SocialIconLink = styled.a`
  color:  ${ ({theme}) => theme.colors.buttonSecondary};
  font-size: 24px;
`;


export const Contact = styled.a`
  color:#E6C17B;
  font-weight:700;
  word-spacing: 4px;
  font-size: 12px;
`;

// export {
//   FooterContainer,
//   FooterSubscription,
//   FooterSubHeading,
//   FooterSubText,
//   Form,
//   FormInput,
//   FooterLinksContainer,
//   FooterLinksWrapper,
//   FooterLinkItems,
//   FooterLinkTitle,
//   FooterLink,
//   SocialMedia,
//   SocialMediaWrap,
//   SocialLogo,
//   SocialIcon, 
//   WebsiteRights, 
//   SocialIcons, 
//   SocialIconLink
// };
