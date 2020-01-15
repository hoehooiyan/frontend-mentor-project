import React from 'react';

const Person = (props) => {
  return (
    <div className="flex items-center">
      <img src={props.img} alt={props.name} className="rounded-full w-8 mr-2" />
      <div>
        <p className="text-sm font-bold tracking-wider">{props.name}</p>
        <p className="text-xs tracking-wide">{props.position}</p>
      </div>
    </div>
  )
}

export default Person;