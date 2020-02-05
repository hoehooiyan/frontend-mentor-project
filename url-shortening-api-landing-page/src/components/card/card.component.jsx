import React from 'react';

import cardStyles from './card.module.scss';

const Card = ({ img, title, text }) => {
  return (
    <div className={cardStyles.card}>
      <img src={img} alt='Feature logo' />
      <h3 className={cardStyles.title}>{title}</h3>
      <p className={cardStyles.text}>
        {text}
      </p>
    </div>
  )
}

export default Card;