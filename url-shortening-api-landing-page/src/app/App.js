import React from 'react';

import './App.styles.scss';

import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';
import Main from '../components/main/main.component';
import Features from '../components/features/features.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Features />
    </div>
  );
}

export default App;
