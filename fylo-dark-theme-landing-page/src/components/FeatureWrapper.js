import React from 'react';
import Feature from './Feature';
import AnywhereIcon from '../images/icon-access-anywhere.svg';
import SecurityIcon from '../images/icon-security.svg';
import CollaborationIcon from '../images/icon-collaboration.svg';
import FileIcon from '../images/icon-any-file.svg';

const FeatureWrapper = (props) => {
  return (
    <div className="feature-wrapper mt-20 2xl:flex 2xl:flex-col 2xl:mx-64">
      <div className="2xl:flex">
        <Feature
          img={AnywhereIcon}
          title="Access your files, anywhere"
          description="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        />
        <Feature
          img={SecurityIcon}
          title="Security you can trust"
          description="2-factor authentication and user-controlled encrytion are just a couple of  the security features we allow to help secure your files."
        />
      </div>
     <div className="2xl:flex">
        <Feature
          img={CollaborationIcon}
          title="Real-time collaboration"
          description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        />
        <Feature
          img={FileIcon}
          title="Store any type of file"
          description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all files types to be securely stored and shared."
        />
     </div>
    </div>
  )
}

export default FeatureWrapper;