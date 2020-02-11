import React from 'react';

import connectorStyles from './connector.module.scss';

const Connector = ({ marginTop, width }) => {
  return (
    <div
      className={connectorStyles.line}
      style={{
        marginTop: `${marginTop}`,
        width: `${width}`
      }}></div>
  );
};

export default Connector;
