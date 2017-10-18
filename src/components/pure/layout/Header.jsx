import React from 'react';

import Palette from 'constants/Palette.js';

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
    position: 'fixed',
    zIndex: 1,
    backgroundColor: 'white',
    height: '100px',
    width: '100vw',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    padding: '12px',
    boxSizing: 'border-box',
    color: Palette.black,
    boxShadow: '0 2px 10px rgba(0,0,0,0.16), 0 2px 5px rgba(0,0,0,0.23)',
  }
};
