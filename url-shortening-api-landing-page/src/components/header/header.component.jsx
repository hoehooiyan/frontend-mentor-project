import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SiteLogo from '../../images/logo.svg';

import globalStyles from '../../app/App.styles.scss';
import headerStyles from './header.module.scss';
import { Header, Panel, Navbar } from './header.styles';

const HeaderWrapper = () => {
  return (
    <Header>
      <Panel>
        <img src={SiteLogo} alt='site-logo' className={headerStyles.img} />
      </Panel>
      <Navbar>
        <a href='#features' className={headerStyles.navItem}>
          Features
        </a>
        <a href='#pricing' className={headerStyles.navItem}>
          Pricing
        </a>
        <a href='#resources' className={headerStyles.navItem}>
          Resources
        </a>
      </Navbar>
      <div className={headerStyles.cta}>
        <Button
          backgroundColor='transparent'
          borderRadius='50rem'
          color={globalStyles.grayishViolet}
          padding='1rem 2rem'
          text='Login'
          width='8rem'
        />
        <Button
          backgroundColor={globalStyles.primaryCyan}
          borderRadius='50rem'
          color='#ffffff'
          padding='1rem 2rem'
          text='Sign Up'
          width='10rem'
        />
      </div>
    </Header>
  );
};

export default HeaderWrapper;
