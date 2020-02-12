import styled from 'styled-components';

import {
  colors,
  globalTopBottomPadding,
  globalLeftRightPadding,
  globalFontFamily
} from '../../app/globalVariables';

import { globalButtonStyles } from '../../app/globalStyles';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                      Beginning of styled - components                      */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Hero Wrapper ------------------------------ */

export const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: ${globalTopBottomPadding} ${globalLeftRightPadding};
  width: 100%;

  ${respondTo.mDesktop`
    padding: 0 ${globalLeftRightPadding} ${globalTopBottomPadding};
  `}

  ${respondTo.lTablet`
    padding: 0 calc(${globalLeftRightPadding} - 4rem) ${globalTopBottomPadding};
  `}

  ${respondTo.mTablet`
    padding: 0 calc(${globalLeftRightPadding} - 6rem) ${globalTopBottomPadding};
  `}

  ${respondTo.lMobile`
    padding: 0 calc(${globalLeftRightPadding} - 8rem) ${globalTopBottomPadding};
    flex-direction: column;
  `}
`;

/* --------------------------- Hero description --------------------------- */

export const HeroDescription = styled.div`
  width: 60%;

  ${respondTo.lMobile`
    text-align: center;
    width: 80%;
  `}
`;

/* ----------------------------- Hero big title ----------------------------- */

export const HeroTitle = styled.h1`
  color: ${colors.darkViolet};
  font-size: 6.5rem;
  font-weight: 700;
  line-height: 1.2;

  ${respondTo.mDesktop`
    font-size: 5rem;
  `}

  ${respondTo.sDesktop`
    font-size: 4rem;
  `}

  ${respondTo.mTablet`
    font-size: 3rem;
    margin-bottom: 0.5rem;
  `}

  ${respondTo.lMobile`
    font-size: 5rem;
    margin-top: 4rem;
  `}
`;

/* -------------------------------- Hero text ------------------------------- */

export const HeroText = styled.p`
  color: ${colors.grayishViolet};
  margin-bottom: 2rem;

  ${respondTo.sDesktop`
    font-size: 1.6rem;
  `}

  ${respondTo.mTablet`
    font-size: 1.4rem;
  `}

  ${respondTo.lMobile`
    font-size: 2rem;
  `}
`;

/* ------------------------------- Hero image ------------------------------- */

export const HeroImage = styled.img`
  position: relative;
  right: -22rem;

  ${respondTo.mDesktop`
    width: 70rem;
  `}

  ${respondTo.sDesktop`
    width: 65rem;
  `}

  ${respondTo.lTablet`
    width: 55rem;
    right: -15rem;
  `}

  ${respondTo.mTablet`
    width: 40rem;
    right: -10rem;
  `}

  ${respondTo.lMobile`
    order: -1;
    width: 70rem;
  `}
`;

/* --------------------------- Get started button --------------------------- */

export const GetStartedButton = styled.button`
  ${globalButtonStyles}
  background-color: ${colors.primaryCyan};
  border-radius: 50rem;
  color: ${colors.white};
  padding: 1rem 2rem;
  width: 15rem;
  z-index: 100;

  ${respondTo.mTablet`
    width: 12rem;
  `}

  ${respondTo.lMobile`
    width: 30rem;
  `}
`;
