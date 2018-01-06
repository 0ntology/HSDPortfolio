import React from 'react';

import Emblem from './cells/Emblem.jsx';
import InlineNav from './cells/InlineNav.jsx';

const MediumHeader = () => {
  return (
    <React.Fragment>
      <Emblem key="Medium-Header-Emblem"/>
      <InlineNav key="Medium-Header-Nav"/>
    </React.Fragment>
  )
}

export default MediumHeader;
