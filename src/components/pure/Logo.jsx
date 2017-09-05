import React from 'react';

import Blueprint from '../../constants/Blueprint.js';
import Title from '../../media/schnaper_logo.gif';

const Logo = () => {
  return (
    <div style={styles.base}>
      <img
        src={Title}
        alt="harry schnaper"
        style={styles.image}
      />
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
  }
};
