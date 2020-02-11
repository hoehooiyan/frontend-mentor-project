import React from 'react';

import {
  ResultWrapper,
  OriginalLink,
  ShortenLink,
  NewLinkWrapper,
  CopyButton
} from './result.styles';

const Result = ({
  originalLink,
  shortenLink,
  handleButtonClick,
  handleLinkClick
}) => {
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
