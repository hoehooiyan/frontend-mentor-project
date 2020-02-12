import styled, { css } from 'styled-components';
import { globalButtonStyles } from '../../app/globalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  colors,
  globalTopBottomPadding,
  globalLeftRightPadding
} from '../../app/globalVariables';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                      Beginning of styled - components                      */
/* -------------------------------------------------------------------------- */

/* ------------------------ Global styles for buttons ----------------------- */

const HeaderButtonStyles = css`
  border-radius: 50rem;
  padding: 1rem 2rem;
  width: 10rem;
`;

/* ---------------------------- Header wrapper ---------------------------- */

export const HeaderWrapper = styled.header`
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

/* ------------------------------ Header panel ------------------------------ */

export const Panel = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 35%;

  ${respondTo.lMobile`
    width: 35%;
  `}

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

/* ------------------------- Header navigation item ------------------------- */

export const NavItem = styled.a`
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
`;

/* ------------------------------ Login Button ------------------------------ */

export const LoginButton = styled.button`
  ${globalButtonStyles}
  ${HeaderButtonStyles}
  background-color: transparent;
  color: ${colors.grayishViolet};
`;

/* ----------------------------- Sign Up Button ----------------------------- */

export const SignUpButton = styled.button`
  ${globalButtonStyles}
  ${HeaderButtonStyles}
  background-color: ${colors.primaryCyan};
  color: ${colors.white};
`;

/* -------------------------------------------------------------------------- */
/*                           Mobile devices styling                           */
/* -------------------------------------------------------------------------- */

/* -------------------------- Mobile Navigation bar ------------------------- */

export const MobileNavbar = styled.nav`
  display: flex;
  flex-direction: column;
`;

/* Font Awesome burger button */
export const MobileNavButton = styled(FontAwesomeIcon)`
  align-self: flex-end;
  color: ${colors.gray};
  font-size: 2.5rem;
`;

/* Dropdown menu content */
export const MobileNavContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primaryViolet};
  border-radius: 0.5rem;
  text-align: center;
  width: 50rem;
`;

/* Dropdown menu item */
export const MobileNavItem = styled.a`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`;
