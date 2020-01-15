import React from 'react';

const Cta = (props) => {
  return (
    <div>
      <button className="bg-accent-blue rounded-full font-bold py-4 w-3/4 2xl:w-1/6 2xl:py-2 ">
      {props.text}
      </button>
    </div>
  )
}

export default Cta;