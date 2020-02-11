import styled, { css } from 'styled-components';

import {
  colors,
  globalFontFamily,
  globalTopBottomPadding,
  globalLeftRightPadding
} from '../../app/globalVariables';

import { respondTo } from '../../app/mixins';

const ButtonStyles = css`
  border: none;
  border-radius: 50rem;
  font-family: ${globalFontFamily};
  font-weight: 900;
  outline: none;
  padding: 1rem 2rem;
  width: 10rem;
`;

/**
 * Header container
 */
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
  padding: ${globalTopBottomPadding} ${globalLeftRightPadding};
  width: 100%;

  ${respondTo.sDesktop`
    margin-bottom: 4rem;
  `}

  ${respondTo.lTablet`
    padding: ${globalTopBottomPadding} calc(${globalLeftRightPadding} - 4rem);
  `}

  ${respondTo.mTablet`
    padding: ${globalTopBottomPadding} calc(${globalLeftRightPadding} - 6rem);
    margin-bottom: 2rem;
  `}

  ${respondTo.lMobile`
    padding: ${globalTopBottomPadding} calc(${globalLeftRightPadding} - 8rem);
  `}
`;

/**
 * Header panel
 */
export const Panel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 35%;

  img {
    margin-right: 5rem;

    ${respondTo.mTablet`
      width: 10rem;
    `}

    ${respondTo.lMobile`
      width: 12rem;
    `}
  }
`;

/**
 * Header navigation bar
 */
export const Navbar = styled.nav`
  a {
    color: ${colors.grayishViolet};
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${colors.darkViolet};
    }

    &:not(:last-child) {
      margin-right: 3rem;
    }
  }
`;

export const LoginButton = styled.button`
  ${ButtonStyles}
  background-color: transparent;
  color: ${colors.grayishViolet};
`;

export const SignUpButton = styled.button`
  ${ButtonStyles}
  background-color: ${colors.primaryCyan};
  color: ${colors.white};
`;
