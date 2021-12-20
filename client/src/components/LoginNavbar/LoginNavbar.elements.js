import styled from 'styled-components';
import { FaMugHot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const LoginNav = styled.nav`
  background: #D7AC87;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.02rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const LoginNavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const LoginNavLogo = styled(Link)`
  color: #361a05;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
`;

export const LoginNavIcon = styled(FaMugHot)`
  margin-right: 0.9em;
`;


export const LoginNavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #472d0c;
  }
`;

export const LoginNavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #8B4513;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;



export const LoginNavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const LoginNavLinks = styled(Link)`
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
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const LoginNavBtnLink = styled(Link)`
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
