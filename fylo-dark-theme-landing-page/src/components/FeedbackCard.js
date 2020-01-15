import React from 'react';
import Person from './Person';
import PersonReview from './PersonReview';

const FeedbackCard = (props) => {
  return (
    <div className="bg-testimonial-blue px-6 py-6 mb-6 rounded 2xl:py-8 2xl:px-8 2xl:w-1/4 2xl:mb-0 2xl:relative">
      <PersonReview review={props.review} />
      <Person
        img={props.img}
        name={props.name}
        position={props.position}
      />
    </div>
  )
}

export default FeedbackCard;