import styled from 'styled-components';

import { globalButtonStyles } from '../../app/globalStyles';
import { colors } from '../../app/globalVariables';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                       Beginning of styled-components                       */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Result wrapper ----------------------------- */
export const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  padding: 1.5rem 4rem;
  margin: 0 auto 2rem auto;
  width: 100%;
  position: relative;
  top: -4rem;

  ${respondTo.mTablet`
    padding: 1rem 3rem;
  `}

  ${respondTo.lMobile`
    flex-direction: column;
    align-items: flex-start;
  `}

  ${respondTo.mMobile`
    padding: 2rem 0;
  `}
`;

/* ------------------------------ Original link ------------------------------ */
export const OriginalLink = styled.p`
  color: ${colors.darkViolet};
  width: 60%;
  word-wrap: break-word;

  ${respondTo.lTablet`
    font-size: 1.5rem;
    width: 50%;
  `}

  ${respondTo.mTablet`
    font-size: 1.3rem;
  `}

  ${respondTo.lMobile`
    font-size: 1.5rem;
    width: 75%;
  `}

  ${respondTo.mMobile`
    margin-bottom: 1rem;
    padding: 0 2rem;
    width: 100%;
  `}
`;

/* ------------------------------ Shorten link ------------------------------ */

export const ShortenLink = styled.p`
  color: ${colors.primaryCyan};

  &:hover {
    color: ${colors.darkenPrimaryCyan};
    cursor: pointer;
    text-decoration: underline;
  }

  ${respondTo.lTablet`
    font-size: 1.5rem;
  `}

  ${respondTo.mTablet`
    font-size: 1.3rem;
  `}

  ${respondTo.lMobile`
    font-size: 1.5rem;
  `}

  ${respondTo.mMobile`
    margin-bottom: 1rem;
    padding: 0 2rem;
  `}
`;

/* --------------------------- New generated link wrapper --------------------------- */

export const NewLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;

  ${respondTo.lTablet`
    width: 35%;
  `}

  ${respondTo.mTablet`
    width: 40%;
  `}

  ${respondTo.lMobile`
    width: 100%;
  `}

  ${respondTo.mMobile`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

/* ------------------------ Copy shorten link button ------------------------ */

export const CopyButton = styled.button`
  ${globalButtonStyles}

  background-color: ${colors.primaryCyan};
  border-radius: 0.5rem;
  color: ${colors.white};
  padding: 1rem 2rem;

  ${respondTo.mMobile`
    margin: 0 auto;
    width: 90%;
  `}
`;

/* --------------------------------- Divider -------------------------------- */

export const Divider = styled.hr`
  border: 0.5px solid ${colors.gray};
  margin-bottom: 1rem;
  width: 100%;
`;
