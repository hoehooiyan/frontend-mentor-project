import React from 'react';

import FirstLogo from '../../images/icon-brand-recognition.svg';
import SecondLogo from '../../images/icon-detailed-records.svg';
import ThirdLogo from '../../images/icon-fully-customizable.svg';

import featuresStyles from './features.module.scss';

import Card from '../card/card.component';
import Connector from '../connector/connector.component';

const Features = () => {
  return (
    <section className={featuresStyles.features}>
      <h2 className={featuresStyles.title}>Advanced Statistics</h2>
      <p className={featuresStyles.text}>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
      <div className={featuresStyles.cards}>
        <Card
          img={FirstLogo}
          marginTop='0'
          title='Brand Recognition'
          text={`Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.`}
        />
        <Connector />
        <Card
          img={SecondLogo}
          marginTop='4rem'
          title='Detailed Records'
          text={`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}
        />
        <Connector />
        <Card
          img={ThirdLogo}
          marginTop='8rem'
          title='Fully Customizable'
          text={`improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`}
        />
      </div>
    </section>
  )
}

export default Features;