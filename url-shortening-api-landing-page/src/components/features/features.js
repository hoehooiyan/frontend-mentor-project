import React from 'react';

import FirstLogo from '../../images/icon-brand-recognition.svg';
import SecondLogo from '../../images/icon-detailed-records.svg';
import ThirdLogo from '../../images/icon-fully-customizable.svg';

import {
  FeaturesWrapper,
  FeaturesTitle,
  FeaturesText,
  CardsWrapper,
  AfterBrandConnector,
  AfterDetailedConnector
} from './features.styles';

import Card from '../card/card';

/* -------------------------------------------------------------------------- */
/*                             Features component                             */
/* -------------------------------------------------------------------------- */

const Features = () => {
  return (
    <FeaturesWrapper id='features'>
      <FeaturesTitle>Advanced Statistics</FeaturesTitle>
      <FeaturesText>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </FeaturesText>
      <CardsWrapper>
        <Card
          icon={FirstLogo}
          marginTop='0'
          title='Brand Recognition'
          text={`Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.`}
        />
        <AfterBrandConnector />
        <Card
          icon={SecondLogo}
          marginTop='4rem'
          title='Detailed Records'
          text={`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}
        />
        <AfterDetailedConnector />
        <Card
          icon={ThirdLogo}
          marginTop='8rem'
          title='Fully Customizable'
          text={`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`}
        />
      </CardsWrapper>
    </FeaturesWrapper>
  );
};

export default Features;
