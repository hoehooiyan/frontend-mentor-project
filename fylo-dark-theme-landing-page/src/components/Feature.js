import React from 'react';

const Feature = (props) => {
  return (
    <div className="flex flex-col items-center text-center p-8 mb-10 2xl:px-40">
      <img src={props.img} alt="feature-icon" className="mb-6 w-16 h-16" />
      <h3 className="font-display text-xl font-bold mb-4">{props.title}</h3>
      <p className="text-sm">{props.description}</p>
    </div>
  )
}

export default Feature;