import React from 'react';

import Blueprint from '../../constants/Blueprint.js';
import Palette from '../../constants/Palette.js';

//import Title from '../../media/assets/iconography/schnaper_logo.gif';

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
    color: Palette.black,
  //  textShadow: `-3px 2px 1px ${Palette.gray}, -2px 3px 5px ${Palette.gray}`,

  }
};
