import React from 'react';

const PersonReview = (props) => {
  return (
    <div>
      <p className="leading-loose text-sm mb-4">{props.review}</p>
    </div>
  )
}

export default PersonReview;