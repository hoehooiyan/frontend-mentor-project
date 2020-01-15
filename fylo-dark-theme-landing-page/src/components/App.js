import React from 'react';
import Hero from './Hero';
import FeatureWrapper from './FeatureWrapper';
import Productive from './Productive';
import FeedbackWrapper from './FeedbackWrapper';
import Signup from './Signup';
import Footer from './Footer';

function App() {
  return (
    <div className="relative App bg-main-blue text-neutral-white font-body relative">
      <Hero />
      <FeatureWrapper />
      <Productive />
      <FeedbackWrapper />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
