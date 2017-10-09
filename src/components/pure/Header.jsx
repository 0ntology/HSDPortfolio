import React from 'react';

import Palette from '../../constants/Palette.js';
import Blueprint from '../../constants/Blueprint.js';

const Header = ({ children }) => {
  return (
    <div style={styles.base}>
      { children }
    </div>
  );
};

export default Header;

const styles = {
  base: {
    gridRow: '1',
    gridColumn: '1 / 9',

    padding: '12px',
    color: Palette.black,
    boxShadow: '0 2px 5px rgba(0,0,0,0.16), 0 2px 5px rgba(0,0,0,0.23)',
    zIndex: '100',
    ...Blueprint.grid(8,1)
  }
};
