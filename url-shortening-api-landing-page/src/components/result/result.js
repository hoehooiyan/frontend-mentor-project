import React from 'react';
// import { useMediaQuery } from '../../hooks/useMediaQuery';
// import { breakpoints } from '../../app/globalVariables';

import {
  ResultWrapper,
  OriginalLink,
  ShortenLink,
  NewLinkWrapper,
  CopyButton
} from './result.styles';

/* -------------------------------------------------------------------------- */
/*                              Result component                              */
/* -------------------------------------------------------------------------- */

const Result = ({
  originalLink,
  shortenLink,
  handleButtonClick,
  handleLinkClick
}) => {
  // const mobileBreakpoint = useMediaQuery(`(max-width: ${breakpoints.lMobile})`);

  return (
    <ResultWrapper>
      <OriginalLink>{originalLink}</OriginalLink>
      <NewLinkWrapper>
        <ShortenLink onClick={handleLinkClick}>{shortenLink}</ShortenLink>
        <CopyButton onClick={handleButtonClick}>Copy</CopyButton>
      </NewLinkWrapper>
    </ResultWrapper>
  );
};

export default Result;
