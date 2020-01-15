import React from 'react';
import Cta from './Cta';

const Signup = (props) => {
  return (
    <div className="signup-form relative z-10 bg-other-blue text-center px-4 py-10 mx-6 rounded-lg mt-0 h-full 2xl:w-1/2 2xl:mx-auto 2xl:px-32">
      <h3 className="font-display font-bold text-xl mb-4 2xl:text-3xl">
        Get early access today
      </h3>
      <p className="text-sm mb-8 px-4">
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
      </p>
      <div className="2xl:flex 2xl:h-16 2xl:items-center">
        <input className="bg-neutral-white font-body text-xs py-4 px-6 mx-auto rounded-full w-3/4 mb-6 2xl:w-1/5" placeholder="email@example.com" />
        <Cta text="Get Started For Free" />
      </div>
    </div>
  )
}

export default Signup;