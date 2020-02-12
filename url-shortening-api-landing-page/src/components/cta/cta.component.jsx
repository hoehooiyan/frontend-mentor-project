import React from 'react';

import { CtaWrapper, CtaTitle, CtaButton } from './cta.styles';

/* -------------------------------------------------------------------------- */
/*                                Cta component                               */
/* -------------------------------------------------------------------------- */

const Cta = () => {
  return (
    <CtaWrapper>
      <CtaTitle>Boost your links today</CtaTitle>
      <CtaButton>Get Started</CtaButton>
    </CtaWrapper>
  );
};

export default Cta;
