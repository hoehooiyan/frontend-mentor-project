import styled from 'styled-components';

import { colors } from '../../app/globalVariables';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                       Beginning of styled-components                       */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Card wrapper ------------------------------ */

export const CardWrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 1rem;
  margin-top: ${props => props.marginTop};
  padding: 0 4rem;
  text-align: left;
  height: 25rem;
  width: 60%;

  ${respondTo.sDesktop`
    height: 27rem;
  `}

  ${respondTo.lTablet`
    height: 23rem;
    padding: 0 3rem;
    width: 55%;
  `}

  ${respondTo.mTablet`
    height: 25rem;
    padding: 0 2.5rem;
    width: 60%;
  `}

  ${respondTo.lMobile`
    padding: 0 3rem;
    text-align: center;
    position: relative;
    z-index: 99;
  `}
`;

/* ------------------------------ Icon wrapper ----------------------------- */

export const IconWrapper = styled.div`
  display: flex;
  background-color: ${colors.primaryViolet};
  border-radius: 100%;
  text-align: center;
  height: 7rem;
  width: 7rem;
  position: relative;
  top: -3rem;

  ${respondTo.lTablet`
    height: 5rem;
    width: 5rem;
    top: -2.5rem;
    margin-bottom: -1rem;
  `}

  ${respondTo.lMobile`
    margin: 0 auto;
    height: 7rem;
    width: 7rem;
    top: -3rem;
  `}
`;

/* ---------------------------------- Icon itself ---------------------------------- */
export const Icon = styled.img`
  margin: auto;
  height: 3.2rem;
  width: 3.2rem;

  ${respondTo.lTablet`
    height: 2.8rem;
    width: 2.8rem;
  `}

  ${respondTo.lMobile`
    height: 3.2rem;
    width: 3.2rem;
  `}
`;

/* ------------------------------- Card title ------------------------------- */

export const CardTitle = styled.h3`
  color: ${colors.darkViolet};
  font-size: 2rem;
  margin-bottom: 1.5rem;

  ${respondTo.lTablet`
    font-size: 1.8rem;
  `}

  ${respondTo.mTablet`
    font-size: 1.6rem;
  `}

  ${respondTo.lMobile`
    font-size: 2.2rem;
  `}
`;

/* -------------------------------- Card text ------------------------------- */

export const CardText = styled.p`
  color: ${colors.grayishViolet};
  font-size: 1.5rem;

  ${respondTo.lTablet`
    font-size: 1.4rem;
  `}

  ${respondTo.mTablet`
    font-size: 1.3rem;
  `}

  ${respondTo.lMobile`
    font-size: 1.5rem;
  `}
`;
