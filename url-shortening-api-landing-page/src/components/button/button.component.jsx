import React from 'react';

// import globalStyles from '../../app/App.styles.scss';
import buttonStyles from './button.module.scss';

const Button = ({ backgroundColor, borderRadius, color, padding, text, width }) => {
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
  }

  return (
    <button style={style} className={buttonStyles.button}>
      {text}
    </button>
  )
}

export default Button;