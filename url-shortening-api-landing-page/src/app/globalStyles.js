import { createGlobalStyle } from 'styled-components/macro';
import { css } from 'styled-components';
import { globalFontFamily, breakpoints } from './globalVariables';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:500,700,900&display=swap');
  @import './mixins.scss';

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;

    html {
      font-size: 62.5%;
      box-sizing: border-box;
    }

    body {
      font-family: ${globalFontFamily} sans-serif;
      font-size: 1.8rem;
      margin: 0 auto;
      max-width: ${breakpoints.lDesktop};
    }
  }
`;

export const globalButtonStyles = css`
  border: none;
  cursor: pointer;
  font-family: ${globalFontFamily};
  font-weight: 900;
  outline: none;
`;
