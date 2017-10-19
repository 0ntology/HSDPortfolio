import React from 'react';

import Blueprint from 'constants/Blueprint.js';
import Palette from 'constants/Palette.js';

const Logo = () => {
  return (
    <div style={styles.base}>
      <div style={styles.text}>
        Harry Schnaper
      </div>
    </div>
  );
};

export default Logo;

const styles = {
  base: {
    height: '50%',
    width: '50%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '32px'
  },
  image: {
    ...Blueprint.image
  },
  text: {
    fontSize: '5vmin',
    cursor: 'pointer',
    color: Palette.black,
  }
};
