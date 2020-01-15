import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcon = (props) => {
  return (
    <div className="self-center m-auto text-base">
      <FontAwesomeIcon icon={props.icon} />
    </div>
  )
}

export default SocialIcon;