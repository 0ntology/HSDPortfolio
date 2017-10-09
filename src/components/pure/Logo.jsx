import React from 'react';

import Blueprint from '../../constants/Blueprint.js';
import Palette from '../../constants/Palette.js';

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
    gridColumn: '1 / 4',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
