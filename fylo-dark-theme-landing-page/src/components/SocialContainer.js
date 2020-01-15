import React from 'react';
import SocialIcon from './SocialIcon';

const SocialContainer = (props) => {
  return (
    <div className="w-8 h-8 border rounded-full flex">
      <SocialIcon icon={props.icon} />
    </div>
  )
}

export default SocialContainer;