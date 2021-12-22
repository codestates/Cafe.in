import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  LoginNav,
  LoginNavbarContainer,
  LoginNavLogo,
  LoginNavIcon,
  LoginNavMenu,
  LoginNavItem,
  LoginNavItemBtn,
  LoginNavLinks,
  LoginNavBtnLink
} from './LoginNavbar.elements';

function LoginNavbar() {
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
        <LoginNav>
          <LoginNavbarContainer>
            <LoginNavLogo to='/main'>
              <LoginNavIcon />
             Cafe In
            </LoginNavLogo>
            <LoginNavMenu onClick={handleClick} click={click}>
              <LoginNavItem>
                <LoginNavLinks to='/mypage' >
                  Mypage
                </LoginNavLinks>
              </LoginNavItem>
              <LoginNavItemBtn>               
                  <LoginNavBtnLink to='/logout'>
                    <Button primary>로그아웃</Button>
                  </LoginNavBtnLink>
              </LoginNavItemBtn>
            </LoginNavMenu>
          </LoginNavbarContainer>
        </LoginNav>
      </IconContext.Provider>
    </>
  );
}

export default LoginNavbar;
