import React from 'react';
import { truncate } from '../../app/truncate';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { breakpoints } from '../../app/globalVariables';

import {
  ResultWrapper,
  OriginalLink,
  ShortenLink,
  NewLinkWrapper,
  CopyButton,
  Divider
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
  const mobileBreakpoint = useMediaQuery(`(max-width: ${breakpoints.mMobile})`);

  return (
    <ResultWrapper>
      <OriginalLink>{truncate(originalLink)}</OriginalLink>
      {mobileBreakpoint ? <Divider /> : null}
      <NewLinkWrapper>
        <ShortenLink onClick={handleLinkClick}>{shortenLink}</ShortenLink>
        <CopyButton onClick={handleButtonClick}>Copy</CopyButton>
      </NewLinkWrapper>
    </ResultWrapper>
  );
};

export default Result;
