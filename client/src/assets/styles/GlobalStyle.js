import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Nanum Myeongjo','Source Sans Pro', sans-serif;
  text-decoration: none;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  margin: 0px 10px;
  border-radius: 40px;
  box-shadow: 0 0px 10px #aaaaaa;
  background: ${ ({ primary }) => (primary ? (({theme}) => theme.colors.buttonSecondary) : (({theme}) => theme.colors.buttonPrimary) ) };
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: ${ ({theme}) => theme.colors.buttonFontColor};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight:480;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? (({theme}) => theme.colors.buttonPrimary) :  (({theme}) => theme.colors.buttonSecondary) )};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    width : 140px;
    margin-top:20px;

    text-align: center;
    vertical-align:center;
  }

`;

export default GlobalStyle;
