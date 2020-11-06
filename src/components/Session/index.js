import React from 'react';

import AuthUserContext from './context';
import withAuthentication from './withAuthentication';

const Session = () => {
  return (
      <div>
        <h1>Session</h1>
      </div>
  );
};

export default Session;

export { AuthUserContext, withAuthentication };