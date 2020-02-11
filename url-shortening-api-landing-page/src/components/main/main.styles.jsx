import styled from 'styled-components';

import {
  colors,
  globalFontFamily,
  globalLeftRightPadding
} from '../../app/globalVariables';

import { globalButtonStyles } from '../../app/globalStyles';

import ShortenUrlBackgroundDesktop from '../../images/bg-shorten-desktop.svg';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                       Beginning of styled-components                       */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Main wrapper ------------------------------ */

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightGray};
  margin: 8rem auto 0 auto;
  padding: 0 ${globalLeftRightPadding};
  position: relative;
  z-index: 8888;

  ${respondTo.lTablet`
    padding: 0 calc(${globalLeftRightPadding} - 4rem);
  `}

  ${respondTo.mTablet`
    padding: 0 calc(${globalLeftRightPadding} - 6rem);
  `}

  ${respondTo.lMobile`
    padding: 0 calc(${globalLeftRightPadding} - 8rem);
  `}
`;

/* ------------------------------ Form wrapper ------------------------------ */

export const FormWrapper = styled.form`
  background-color: ${colors.primaryViolet};
  background-image: url(${ShortenUrlBackgroundDesktop});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  height: 15rem;
  margin: 0 auto;
  padding: 0 6rem;
  width: 100%;
  position: relative;
  top: -7rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${respondTo.mTablet`
    height: 10rem;
    padding: 0 2rem;
    top: -5rem;
    margin-bottom: 2rem;
  `}
`;

/* ------------------------------- Form input ------------------------------- */

export const FormInput = styled.input`
  border: ${props => (props.noInput ? `4px solid ${colors.red}` : `none`)};
  border-radius: 0.5rem;
  caret-color: ${props =>
    props.noInput ? `${colors.red}` : `${colors.primaryViolet}`};
  color: ${colors.primaryViolet};
  font-family: ${globalFontFamily};
  outline: none;
  padding: 1rem 2rem;
  width: 80%;

  ::placeholder {
    color: ${props => (props.noInput ? `${colors.red}` : `${colors.gray}`)};
    opacity: ${props => (props.noInput ? `0.5` : null)};
  }

  ${respondTo.mTablet`
    width: ${props => (props.noInput ? `75%` : `70%`)};
  `}
`;

/* --------------------- Error shown based on user input -------------------- */
export const ErrorInfo = styled.p`
  color: ${colors.red};
  font-size: 1.4rem;
  font-style: italic;
  position: absolute;
  left: 8rem;
  top: 10.2rem;
  visibility: visible;
  z-index: 2000;

  ${respondTo.mTablet`
    font-size: 1.3rem;
    left: 4rem;
    top: 7.8rem;
  `}
`;

/* ------------------------------ Submit button ----------------------------- */
export const SubmitButton = styled.button`
  ${globalButtonStyles}
  background-color: ${colors.primaryCyan};
  border-radius: 0.5rem;
  color: ${colors.white};
  padding: 1rem 2rem;
  width: 15%;

  ${respondTo.mTablet`
    font-size: 1.3rem;
    width: 18%;
  `}
`;

/* ----------------------------- Result wrapper ----------------------------- */

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
