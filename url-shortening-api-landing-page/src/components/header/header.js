import React, { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { breakpoints } from '../../app/globalVariables';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SiteLogo from '../../images/logo.svg';

import {
  HeaderWrapper,
  Panel,
  NavItem,
  LoginButton,
  SignUpButton,
  MobileNavbar,
  MobileNavButton,
  MobileNavContent,
  MobileNavItem,
  Divider
} from './header.styles';

/* -------------------------------------------------------------------------- */
/*                              Header component                              */
/* -------------------------------------------------------------------------- */

const Header = () => {
  const mobileBreakpoint = useMediaQuery(`(max-width: ${breakpoints.lMobile})`);
  const [isClicked, setIsClicked] = useState(false);

  const handleNavbarClick = e => {
    setIsClicked(!isClicked);
  };

  return (
    <HeaderWrapper>
      <Panel>
        <img src={SiteLogo} alt='site-logo' />
        {mobileBreakpoint ? null : (
          <nav>
            <NavItem href='#features'>Features</NavItem>
            <NavItem href='#pricing'>Pricing</NavItem>
            <NavItem href='#resources'>Resources</NavItem>
          </nav>
        )}
      </Panel>
      {mobileBreakpoint ? (
        <MobileNavbar>
          <MobileNavButton icon={faBars} onClick={handleNavbarClick} />
          {isClicked ? (
            <MobileNavContent>
              <MobileNavItem href='#features'>Features</MobileNavItem>
              <MobileNavItem href='#pricing'>Pricing</MobileNavItem>
              <MobileNavItem href='#resources'>Resources</MobileNavItem>
              <Divider />
              <LoginButton>Login</LoginButton>
              <SignUpButton>Sign Up</SignUpButton>
            </MobileNavContent>
          ) : null}
        </MobileNavbar>
      ) : (
        <div>
          <LoginButton>Login</LoginButton>
          <SignUpButton>Sign Up</SignUpButton>
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
