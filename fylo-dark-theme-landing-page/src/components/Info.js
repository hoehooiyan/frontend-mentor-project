import React from 'react';

const Info = (props) => {
  return (
    <div className="flex mb-4">
      <img src={props.img} alt="icon" className={props.property} />
      <p className="inline-block">{props.text}</p>
    </div>
  )
}

export default Info;