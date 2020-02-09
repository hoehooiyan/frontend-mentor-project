import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import globalStyles from '../../app/App.styles.scss';
import ctaStyles from './cta.module.scss';

import Button from '../button/button.component';

const Cta = () => {
  const lMobileButton = useMediaQuery(`(max-width: ${globalStyles.lMobile})`);

  return (
    <section className={ctaStyles.cta}>
      <h2 className={ctaStyles.title}>Boost your links today</h2>
      <Button
        backgroundColor={globalStyles.primaryCyan}
        borderRadius='50rem'
        color='#ffffff'
        fontSize={lMobileButton ? '1.8rem' : null}
        padding='1.2rem 2rem'
        text='Get Started'
        width={lMobileButton ? '18rem' : '15rem'}
      />
    </section>
  );
};

export default Cta;
