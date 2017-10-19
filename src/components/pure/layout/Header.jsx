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
    position: 'relative',
    zIndex: '1',
    backgroundColor: 'white',
    height: '10vh',
    width: '100vw',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

    boxSizing: 'border-box',
    color: Palette.black,
    boxShadow: '0 2px 10px rgba(0,0,0,0.16), 0 2px 5px rgba(0,0,0,0.23)',
  }
};
