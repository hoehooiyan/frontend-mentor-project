import React from 'react';

import cardStyles from './card.module.scss';

const Card = ({ img, title, text, marginTop }) => {
  return (
    <div className={cardStyles.card}
      style={{
        marginTop: `${marginTop}`
      }}
    >
      <div className={cardStyles.imgWrapper}>
        <img src={img} alt='Feature logo' className={cardStyles.img}/>
      </div>
      <h3 className={cardStyles.title}>{title}</h3>
      <p className={cardStyles.text}>
        {text}
      </p>
    </div>
  )
}

export default Card;