import React from 'react';

import columnStyles from './column.module.scss';

const Column = ({ title, itemOne, itemTwo, itemThree, itemFour }) => {
  return (
    <div className={columnStyles.column}>
      <h5 className={columnStyles.title}>{title}</h5>
      <ul className={columnStyles.list}>
        <li>{itemOne}</li>
        <li>{itemTwo}</li>
        <li>{itemThree}</li>
        <li>{itemFour ? `${itemFour}` : null}</li>
      </ul>
    </div>
  )
}

export default Column;