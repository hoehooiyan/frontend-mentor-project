/**
 * Reference article
 * https://tobbelindstrom.com/blog/how-to-create-a-breakpoint-mixin-with-styled-components/
 */

import { css } from 'styled-components';
import { breakpoints } from './globalVariables';

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
