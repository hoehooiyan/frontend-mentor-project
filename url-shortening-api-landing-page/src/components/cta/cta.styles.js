import styled from 'styled-components';

import CtaDesktopBackgroundImage from '../../images/bg-boost-desktop.svg';
import CtaMobileBackgroundImage from '../../images/bg-boost-mobile.svg';

import { colors, featureMarginTop } from '../../app/globalVariables';
import { globalButtonStyles } from '../../app/globalStyles';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                       Beginning of styled-components                       */
/* -------------------------------------------------------------------------- */

/* ------------------------- CTA wrapper ------------------------- */

export const CtaWrapper = styled.section`
  background-color: ${colors.primaryViolet};
  background-image: url(${CtaDesktopBackgroundImage});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20rem;
  margin: ${featureMarginTop} auto 0 auto;
  padding: 5rem 0;
  text-align: center;
  width: 100%;

  ${respondTo.lMobile`
    background-image: url{${CtaMobileBackgroundImage}};
    padding: 4rem 0;
  `}
`;

/* ---------------------------- CTA section title --------------------------- */

export const CtaTitle = styled.h2`
  color: ${colors.white};
  margin-bottom: 2rem;

  ${respondTo.mTablet`
    font-size: 2.4rem;
  `}

  ${respondTo.lMobile`
    font-size: 3rem;
  `}

  ${respondTo.mMobile`
    font-size: 2.5rem;
  `}
`;

/* ------------------------------- CTA button ------------------------------- */

export const CtaButton = styled.button`
  ${globalButtonStyles}

  background-color: ${colors.primaryCyan};
  border-radius: 50rem;
  color: ${colors.white};
  padding: 1rem 2rem;
  width: 15rem;

  ${respondTo.lMobile`
    font-size: 1.8rem;
    width: 18rem;
  `}
`;
