import styled from 'styled-components';

import { colors } from '../../app/globalVariables';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                       Beginning of styled-components                       */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Column wrapper ----------------------------- */

export const ColumnWrapper = styled.div``;

/* ------------------------------ Column title ------------------------------ */

export const ColumnTitle = styled.h5`
  color: ${colors.white};
  margin-bottom: 2rem;

  ${respondTo.lMobile`
    font-size: 1.8rem;
  `}
`;

/* ------------------------------- Column list ------------------------------- */

export const ColumnList = styled.ul`
  color: ${colors.gray};
  cursor: pointer;
  font-size: 1.5rem;
  list-style-type: none;

  ${respondTo.mTablet`
    font-size: 1.3rem;
  `}

  ${respondTo.lMobile`
    font-size: 1.5rem;
    margin-bottom: 3rem;
  `}
`;

/* ---------------------------- Column list item ---------------------------- */

export const ColumnListItem = styled.li`
  margin-bottom: 1rem;
  transition: all 0.3s;

  &:hover {
    color: ${colors.primaryCyan};
  }
`;
