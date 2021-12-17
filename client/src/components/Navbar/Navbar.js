import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <IconContext.Provider value={{color: '#472d0c'}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              <NavIcon />
             Cafe In
            </NavLogo>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' >
                  로그인
                </NavLinks>
              </NavItem>
              <NavItemBtn>               
                  <NavBtnLink to='/sign-up'>
                    <Button primary>회원가입</Button>
                  </NavBtnLink>
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
