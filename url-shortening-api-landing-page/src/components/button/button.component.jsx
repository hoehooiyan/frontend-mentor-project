import React from 'react';

// import globalStyles from '../../app/App.styles.scss';
import buttonStyles from './button.module.scss';

const Button = ({
  backgroundColor,
  borderRadius,
  color,
  padding,
  text,
  width,
  handleClick
}) => {
  const style = {
    backgroundColor: `${backgroundColor}`,
    border: `none`,
    borderRadius: `${borderRadius}`,
    color: `${color}`,
    cursor: `pointer`,
    fontFamily: `Poppins, sans-serif`,
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
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
