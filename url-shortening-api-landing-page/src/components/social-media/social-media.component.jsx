import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import socialMediaStyles from './social-media.module.scss';

library.add(
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram
);

const SocialMedia = () => {
  return (
    <div className={socialMediaStyles.container}>
      <FontAwesomeIcon icon={faFacebookSquare} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faPinterest} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  )
}

export default SocialMedia;