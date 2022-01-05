import styled from 'styled-components';
import { FaMugHot , FaRegMap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyle';

export const Nav = styled.nav`
  background: #FDF5E6;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.02rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color:  #7b95f2;
  font-weight: 700;
  text-shadow : 2px 2px 2px #CCCCCC;
  justify-self: flex-start;
  text-decoration: center;
  white-space:nowrap;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMugHot)`
  margin-right: 0.3em;
  fill : #E6C17B;
  animation: move2  1s infinite;

  @keyframes move2{
    0%, 20%, 50%, 80%, 100% {transform: translateX(0);}
    40% {transform: translateX(3px);}
    60% {transform: translateX(-3px);}
} 

`


export const NavIcon2 = styled(FaRegMap)`
  fill : #E6C17B;
  width: 40px;
  align-items: center;

  @media screen and (max-width: 960px) {
    overflow:hidden;
  }
`;


export const NavLogo2 = styled.div`
  text-shadow : 2px 2px 2px #CCCCCC;
  align-items: center;
  font-size: 2rem;
  margin-left : 1.4em;
  margin-top: 0.8em;
  margin-right: -1.4em;
  display: flex;

  @media screen and (max-width: 960px) {
    overflow:hidden;
  }
`;


export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #472d0c;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #7b95f2;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;



export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #E6C17B;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
