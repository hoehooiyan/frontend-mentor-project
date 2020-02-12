import styled from 'styled-components';

import { colors, globalLeftRightPadding } from '../../app/globalVariables';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                       Beginning of styled-components                       */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Footer wrapper ----------------------------- */

export const FooterWrapper = styled.footer`
  background-color: ${colors.darkViolet};
  padding: 6rem ${globalLeftRightPadding};
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  /* ${respondTo.lTablet`
    padding: 6rem calc(${globalLeftRightPadding} - 4rem);
  `} */

  ${respondTo.lTablet`
    padding: 6rem calc(${globalLeftRightPadding} - 4rem);
  `}

  ${respondTo.mTablet`
    padding: 6rem calc(${globalLeftRightPadding} - 6rem);
  `}

  ${respondTo.lMobile`
    padding: 6rem calc(${globalLeftRightPadding} - 8rem);
    flex-direction: column;
    align-items: center;
  `}
`;

/* ------------------------------- Footer logo ------------------------------ */

export const FooterLogo = styled.img`
  ${respondTo.mTablet`
    width: 10rem;
  `}

  ${respondTo.lMobile`
    margin-bottom: 4rem;
    width: 12rem;
  `}
`;

/* ----------------------------- Column wrapper ----------------------------- */

export const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;

  ${respondTo.lTablet`
    width: 80%;
  `}

  ${respondTo.lMobile`
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
`;
