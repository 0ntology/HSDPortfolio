import React from 'react';

const NavBar = ({ children }) => {
  return (
    <div style={styles.base}>
      { children }
    </div>
  );
};

export default NavBar;

const styles = {
  base: {
    fontFamily: 'Josefin Sans',
    height: '100%',
    width: '50%',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginRight: '32px',
    boxSizing: 'border-box'
  }
}
