import React from 'react';



import featuresStyles from './features.module.scss';

import Card from '../card/card.component';

const Features = () => {
  return (
    <section className={featuresStyles.features}>
      <h2 className={featuresStyles.title}>Advanced Statistics</h2>
      <p className={featuresStyles.text}>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
      <div className={featuresStyles.cards}>
        <Card />
      </div>
    </section>
  )
}

export default Features;