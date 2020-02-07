import React from 'react';

import './App.styles.scss';

import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';
import Main from '../components/main/main.component';
import Features from '../components/features/features.component';
import Cta from '../components/cta/cta.component';
import Footer from '../components/footer/footer.component';

const App = () => {
  return (
    <div className='App'>
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
