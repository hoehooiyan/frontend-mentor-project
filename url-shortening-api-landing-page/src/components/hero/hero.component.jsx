import React from 'react';

import HeroImg from '../../images/illustration-working.svg';

import globalStyles from '../../app/App.styles.scss';
import heroStyles from './hero.module.scss';

import Button from '../button/button.component';

const Hero = () => {
  return (
    <section className={heroStyles.hero}>
      <div className={heroStyles.heroDescription}>
        <h1 className={heroStyles.heroTitle}>More than just shorter links</h1>
        <p className={heroStyles.heroText}>
          Build your brand's recognition and get detailed insights on how your links are performing.
      </p>
        <Button
          backgroundColor={globalStyles.primaryCyan}
          borderRadius='50rem'
          color='#ffffff'
          padding='1rem 2rem'
          text='Get Started'
          width='15rem'
        />
      </div>
      <img src={HeroImg} alt='Illustration working' className={heroStyles.heroImg}/>
    </section>
  )
}

export default Hero;