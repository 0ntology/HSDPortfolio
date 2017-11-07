import React from 'react';
import Radium from 'radium';

import Colors from 'constants/Colors.js';

const Bar = ({ children, customStyles }) =>
  <div style={[styles.base, customStyles]}>
    { children }
  </div>;

export default Radium(Bar);

const styles = {
  base: {
    position: 'relative',
    zIndex: '1',

    backgroundColor: 'white',
    color: Colors.black,

    height: '55px',
    width: '100vw',
    boxSizing: 'border-box',
  }
};
