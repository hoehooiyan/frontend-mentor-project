import React from 'react';

import { GlobalStyles } from './globalStyles';

import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import Main from '../components/main/main';
import Features from '../components/features/features';
import Cta from '../components/cta/cta';
import Footer from '../components/footer/footer';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Hero />
      <Main />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
