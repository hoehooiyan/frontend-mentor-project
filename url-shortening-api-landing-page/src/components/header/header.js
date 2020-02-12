import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import SiteLogo from '../../images/logo.svg';

import {
  HeaderWrapper,
  Panel,
  Navbar,
  NavItem,
  LoginButton,
  SignUpButton
} from './header.styles';

/* -------------------------------------------------------------------------- */
/*                              Header component                              */
/* -------------------------------------------------------------------------- */

const Header = () => {
  return (
    <HeaderWrapper>
      <Panel>
        <img src={SiteLogo} alt='site-logo' />
        <Navbar>
          <NavItem href='#features'>Features</NavItem>
          <NavItem href='#pricing'>Pricing</NavItem>
          <NavItem href='#resources'>Resources</NavItem>
        </Navbar>
      </Panel>
      <div>
        <LoginButton>Login</LoginButton>
        <SignUpButton>Sign Up</SignUpButton>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
