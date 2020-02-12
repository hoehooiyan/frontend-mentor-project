import React from 'react';

import SiteLogo from '../../images/logo-footer.svg';

import { FooterWrapper, FooterLogo, ColumnWrapper } from './footer.styles';

import Column from '../column/column';
import SocialMedia from '../social-media/social-media';

/* -------------------------------------------------------------------------- */
/*                              Footer component                              */
/* -------------------------------------------------------------------------- */

const Footer = () => {
  return (
    <FooterWrapper id='resources'>
      <FooterLogo src={SiteLogo} alt='Site logo' />
      <ColumnWrapper>
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
      </ColumnWrapper>
    </FooterWrapper>
  );
};

export default Footer;
