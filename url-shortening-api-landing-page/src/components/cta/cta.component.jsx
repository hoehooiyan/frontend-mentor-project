import React from 'react';

import globalStyles from '../../app/App.styles.scss';
import ctaStyles from './cta.module.scss';

import Button from '../button/button.component';

const Cta = () => {
  return (
    <section className={ctaStyles.cta}>
      <h2 className={ctaStyles.title}>Boost your links today</h2>
      <Button
        backgroundColor={globalStyles.primaryCyan}
        borderRadius='50rem'
        color='#ffffff'
        padding='1.2rem 2rem'
        text='Get Started'
        width='15rem'
      />
    </section>
  )
}

export default Cta;