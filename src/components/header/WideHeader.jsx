import React from 'react';

import Emblem from './cells/Emblem.jsx';
import InlineNav from './cells/InlineNav.jsx';

const WideHeader = () => {
  return (
    <React.Fragment>
      <Emblem key="Wide-Header-Emblem"/>
      <div style={styles.item} />
      <InlineNav key="Wide-Header-Nav"/>
    </React.Fragment>
  )
}

export default WideHeader;

const styles = {
  item: {
    flex: 1,
    height: '100%',
    margin: '0px 4px',
  },
};
