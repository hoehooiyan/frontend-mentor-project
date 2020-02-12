import React from 'react';

import HeroImg from '../../images/illustration-working.svg';

import {
  HeroWrapper,
  HeroDescription,
  HeroTitle,
  HeroText,
  HeroImage,
  GetStartedButton
} from './hero.styles';

/* -------------------------------------------------------------------------- */
/*                               Hero component                               */
/* -------------------------------------------------------------------------- */

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroDescription>
        <HeroTitle>More than just shorter links</HeroTitle>
        <HeroText>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </HeroText>
        <GetStartedButton>Get Started</GetStartedButton>
      </HeroDescription>
      <HeroImage src={HeroImg} alt='Hero illustration' />
    </HeroWrapper>
  );
};

export default Hero;
