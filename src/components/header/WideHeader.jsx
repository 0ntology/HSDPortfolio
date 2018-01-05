import React from 'react';

import Emblem from './cells/Emblem.jsx';
import InlineNav from './cells/InlineNav.jsx';

const WideHeader = () => {
  return ([
      <Emblem />,
      <div style={styles.item} />,
      <InlineNav />
  ]);
}

export default WideHeader;

const styles = {
  item: {
    flex: 1,
    height: '100%',
    margin: '0px 4px',
  },
};
