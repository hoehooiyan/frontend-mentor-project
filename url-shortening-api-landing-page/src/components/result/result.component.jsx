import React from 'react';

import globalStyles from '../../app/App.styles.scss';
import resultStyles from './result.module.scss';

import Button from '../button/button.component';

const Result = ({
  originalLink,
  shortenLink,
  handleButtonClick,
  handleLinkClick
}) => {
  return (
    <div className={resultStyles.result}>
      <p className={resultStyles.originalLink}>{originalLink}</p>
      <div className={resultStyles.newLinkWrapper}>
        <p className={resultStyles.shortenLink} onClick={handleLinkClick}>
          {shortenLink}
        </p>
        <Button
          backgroundColor={globalStyles.primaryCyan}
          borderRadius='0.5rem'
          color='#ffffff'
          padding='1rem 2rem'
          text='Copy'
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Result;
