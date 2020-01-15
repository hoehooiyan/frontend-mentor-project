import React from 'react';
import FeedbackCard from './FeedbackCard';
import Person1 from '../images/profile-1.jpg';
import Person2 from '../images/profile-2.jpg';
import Person3 from '../images/profile-3.jpg';
import DoubleQuoteIcon from '../images/bg-quotes.png';

const FeedbackWrapper = (props) => {
  return (
    <div className="mx-8 2xl:mx-64">
      <img src={DoubleQuoteIcon} alt="double-quote-icon" className="w-12 pl-2 2xl:mx-10 2xl:relative 2xl:-bottom-1/2 2xl:z-0" />
      <div className="2xl:flex 2xl:justify-around">
        <FeedbackCard
          review="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          img={Person1}
          name="Satish Patel"
          position="Founder & CEO, Huddle"
        />

        <FeedbackCard
          review="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          img={Person2}
          name="Bruce McKenzie"
          position="Founder & CEO, Huddle"
        />

        <FeedbackCard
          review="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          img={Person3}
          name="Iva Boyd"
          position="Founder & CEO, Huddle"
        />
      </div>
    </div>
  )
}

export default FeedbackWrapper;