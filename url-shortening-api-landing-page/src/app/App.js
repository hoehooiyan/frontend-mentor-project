import React from 'react';

import './App.styles.scss';

import Header from '../components/header/header.component';
import Hero from '../components/hero/hero.component';
import Main from '../components/main/main.component';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
