import React from 'react';

import SiteLogo from '../../images/logo-footer.svg';

import footerStyles from './footer.module.scss';

import Column from '../column/column.component';
import SocialMedia from '../social-media/social-media.component';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <img src={SiteLogo} alt='Site logo' />
      <div className={footerStyles.wrapper}>
        <Column
          title='Features'
          itemOne='Link Shortening'
          itemTwo='Branded Links'
          itemThree='Analytics'
        />
        <Column
          title='Resources'
          itemOne='Blog'
          itemTwo='Developers'
          itemThree='Support'
        />
        <Column
          title='Company'
          itemOne='About'
          itemTwo='Our Team'
          itemThree='Careers'
          itemFour='Contact'
        />
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
