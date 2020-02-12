import styled, { css } from 'styled-components';

import { colors, globalLeftRightPadding } from '../../app/globalVariables';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                       Beginning of styled-components                       */
/* -------------------------------------------------------------------------- */

/* ------------------------- Shared connector styles ------------------------ */

const sharedConnectorStyles = css`
  border-bottom: 8px solid ${colors.primaryCyan};
  margin-top: 14rem;
  position: relative;
  transform: rotate(180deg);
  width: 8rem;
  z-index: 100;

  ${respondTo.lMobile`
    transform: rotate(90deg);
    z-index: 98;
  `}
`;

/* ---------------------------- Features wrapper ---------------------------- */

export const FeaturesWrapper = styled.section`
  background-color: ${colors.lightGray};
  margin: 0 auto;
  padding: 0 ${globalLeftRightPadding} 30rem ${globalLeftRightPadding};
  text-align: center;
  width: 100%;
  z-index: 100;

  ${respondTo.lTablet`
    padding: 0 calc(${globalLeftRightPadding} - 4rem) 30rem calc(${globalLeftRightPadding} - 4rem);
  `}

  ${respondTo.lTablet`
      padding: 0 calc(${globalLeftRightPadding} - 6rem) 30rem calc(${globalLeftRightPadding} - 6rem);
  `}

  ${respondTo.lTablet`
    padding: 0 calc(${globalLeftRightPadding} - 8rem) 30rem calc(${globalLeftRightPadding} - 8rem);
  `}
`;

/* ----------------------------- Features title ----------------------------- */

export const FeaturesTitle = styled.h2`
  color: ${colors.darkViolet};
  font-size: 3rem;
  margin: 0 auto;
  width: 52rem;

  ${respondTo.mTablet`
    font-size: 2.5rem;
  `}

  ${respondTo.lMobile`
    font-size: 3rem;
  `}
`;

/* ------------------------------ Features text ------------------------------ */

export const FeaturesText = styled.p`
  color: ${colors.grayishViolet};
  margin: 0 auto;
  width: 52rem;

  ${respondTo.mTablet`
    font-size: 1.6rem;
    width: 45rem;
  `}
`;

/* -------------------------- Features cards wrapper ------------------------- */

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 8rem;

  ${respondTo.lMobile`
      flex-direction: column;
      align-items: center;
  `}
`;

/* -------------------------------- After Brand Connector ------------------------------- */

export const AfterBrandConnector = styled.div`
  ${sharedConnectorStyles}

  ${respondTo.lMobile`
    margin-top: 2.5rem;
  `}
`;

/* ------------------------- After Detailed Connetor ------------------------ */

export const AfterDetailedConnector = styled.div`
  ${sharedConnectorStyles}

  ${respondTo.lMobile`
    margin-top: -1rem;
    width: 15rem;
  `}
`;
