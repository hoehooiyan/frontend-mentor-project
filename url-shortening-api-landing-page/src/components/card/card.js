import React from 'react';

import {
  CardWrapper,
  IconWrapper,
  Icon,
  CardTitle,
  CardText
} from './card.styles';

/* -------------------------------------------------------------------------- */
/*                               Card component                               */
/* ---------------------------------------------d----------------------------- */

const Card = ({ icon, title, text, marginTop }) => {
  return (
    <CardWrapper marginTop={marginTop}>
      <IconWrapper>
        <Icon src={icon} alt='Feature logo' />
      </IconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardWrapper>
  );
};

export default Card;
