import React from 'react';

// import globalStyles from '../../app/App.styles.scss';
import buttonStyles from './button.module.scss';

const Button = ({
  backgroundColor,
  borderRadius,
  color,
  fontSize,
  padding,
  text,
  width,
  handleButtonClick
}) => {
  const style = {
    backgroundColor: `${backgroundColor}`,
    border: `none`,
    borderRadius: `${borderRadius}`,
    color: `${color}`,
    cursor: `pointer`,
    fontFamily: `Poppins, sans-serif`,
    fontSize: `${fontSize}`,
    fontWeight: `700`,
    padding: `${padding}`,
    text: `${text}`,
    width: `${width}`
  };

  return (
    <button
      type='submit'
      style={style}
      className={buttonStyles.button}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
