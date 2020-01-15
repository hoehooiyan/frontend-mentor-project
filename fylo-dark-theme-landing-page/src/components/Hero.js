import React from 'react';
import Header from './Header';
import HeroImg from '../images/illustration-intro.png';
import Cta from './Cta';

const Hero = (props) => {
  return (
    <div className="hero text-center bg-other-blue">
      <Header />
      <img src={HeroImg} alt="hero-illustration" className="hero-img px-8 mb-6 2xl:mx-auto 2xl:w-2/5" />
      <h1 className="font-display font-bold text-2xl px-4 mb-4 2xl:w-1/3 2xl:mx-auto">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="mx-10 mb-8 text-sm 2xl:w-1/4 2xl:mx-auto">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends family, and co-workers.
      </p>
      <div className="mx-6">
        <Cta text="Get Started" />
      </div>
    </div>
  )
}

export default Hero;