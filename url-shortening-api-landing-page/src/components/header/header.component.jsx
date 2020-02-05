import React from 'react';

import SiteLogo from '../../images/logo.svg';

import globalStyles from '../../app/App.styles.scss';
import headerStyles from './header.module.scss';

import Button from '../button/button.component';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.panel}>
        <img src={SiteLogo} alt='site-logo' className={headerStyles.img} />
        <nav className={headerStyles.navbar}>
          <a href='#features' className={headerStyles.navItem}>Features</a>
          <a href='#pricing' className={headerStyles.navItem}>Pricing</a>
          <a href='#resources' className={headerStyles.navItem}>Resources</a>
        </nav>
      </div>
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
    </header>
  )
}

export default Header;