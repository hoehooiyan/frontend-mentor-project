import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { SocialMediaWrapper } from './social-media.styles';

/* -------------------------------------------------------------------------- */
/*                           Social media component                           */
/* -------------------------------------------------------------------------- */

const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faPinterest} />
      <FontAwesomeIcon icon={faInstagram} />
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
