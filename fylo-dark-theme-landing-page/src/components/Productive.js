import React from 'react';
import ProductiveImg from '../images/illustration-stay-productive.png';
import ArrowIcon from '../images/icon-arrow.svg';

const Productive = (props) => {
  return (
    <div className="mb-32 2xl:flex 2xl:items-center 2xl:justify-center">
      <img src={ProductiveImg} alt={ProductiveImg} className="px-6 mb-20 mt-32 2xl:ml-48 2xl:mr-12" />
      <div className="px-6">
        <h3 className="font-display text-xl font-bold mb-4 2xl:text-3xl 2xl:w-64">Stay productive, wherever you are</h3>
        <p className="mb-4 text-sm 2xl:w-3/5">
          Never let location be an issue when accessing your files.
          Fylo has you covered for all of your file storage needs.
        </p>
        <p className="mb-4 text-sm 2xl:w-3/5">
          Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </p>

        <div className="signup flex w-1/2 justify-between items-center 2xl:w-1/5">
          <p className="text-accent-cyan text-sm">See how Fylo works</p>
          <img src={ArrowIcon} alt={ArrowIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Productive;