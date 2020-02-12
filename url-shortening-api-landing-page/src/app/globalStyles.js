import { createGlobalStyle } from 'styled-components/macro';
import { css } from 'styled-components';
import { globalFontFamily, breakpoints } from './globalVariables';

export const GlobalStyles = createGlobalStyle`
  /*@import url('https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap');*/

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-family: ${globalFontFamily};
    font-size: 1.8rem;
    margin: 0 auto;
    max-width: ${breakpoints.lDesktop};
  }
`;

export const globalButtonStyles = css`
  border: none;
  cursor: pointer;
  font-family: ${globalFontFamily};
  font-weight: 700;
  outline: none;
`;
