import styled from 'styled-components';

import { colors } from '../../app/globalVariables';

import { respondTo } from '../../app/mixins';

/* -------------------------------------------------------------------------- */
/*                       Beginning of styled-components                       */
/* -------------------------------------------------------------------------- */

/* -------------------------- Social media wrapper -------------------------- */

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18%;

  ${respondTo.lMobile`
    width: 40%;
  `}

  ${respondTo.mMobile`
    width: 50%;
  `}

  svg {
    color: white;
    cursor: pointer;
    font-size: 2.5rem;
    transition: all 0.3s;

    &:hover {
      color: ${colors.primaryCyan};
    }

    ${respondTo.mTablet`
      font-sizeL 2rem;
    `}

    ${respondTo.lMobile`
      font-size: 2.5rem;
    `}
  }
`;
