import React from 'react';

import {
  ColumnWrapper,
  ColumnTitle,
  ColumnList,
  ColumnListItem
} from './column.styles';

/* -------------------------------------------------------------------------- */
/*                              Column component                              */
/* -------------------------------------------------------------------------- */

const Column = ({ title, itemOne, itemTwo, itemThree, itemFour }) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>{title}</ColumnTitle>
      <ColumnList>
        <ColumnListItem>{itemOne}</ColumnListItem>
        <ColumnListItem>{itemTwo}</ColumnListItem>
        <ColumnListItem>{itemThree}</ColumnListItem>
        <ColumnListItem>{itemFour ? `${itemFour}` : null}</ColumnListItem>
      </ColumnList>
    </ColumnWrapper>
  );
};

export default Column;
