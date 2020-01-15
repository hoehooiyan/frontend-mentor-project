import React from 'react';
import FyloLogo from '../images/logo.svg';
import Info from './Info';
import LocationIcon from '../images/icon-location.svg';
import PhoneIcon from '../images/icon-phone.svg';
import EmailIcon from '../images/icon-email.svg';
import Directory from './Directory';
import SocialContainer from './SocialContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Footer = (props) => {
  return (
    <div className="bg-footer-blue pb-12 px-10 pt-64">
      <img src={FyloLogo} alt="fylo-logo" className="mb-10" />
      <Info
        property="mr-4 mt-2 self-start"
        img={LocationIcon}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <Info
        property="mr-4 self-center"
        img={PhoneIcon}
        text="+1-543-123-4567"
      />
      <Info
        property="mr-4 self-center"
        img={EmailIcon}
        text="example@fylo.com"
      />
      <div className="mt-16 mb-10">
        <Directory text="About Us" />
        <Directory text="Jobs" />
        <Directory text="Press" />
        <Directory text="Blog" />
      </div>
      <div className="mb-16">
        <Directory text="Contact Us" />
        <Directory text="Terms" />
        <Directory text="Privacy" />
      </div>
      <div className="flex justify-around w-1/2 mx-auto">
        <SocialContainer icon={['fab', 'facebook-f']} />
        <SocialContainer icon={['fab', 'twitter']} />
        <SocialContainer icon={['fab', 'instagram']} />
      </div>
    </div>
  )
}

export default Footer;