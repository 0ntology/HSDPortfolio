import React from 'react';
import Radium from 'radium';

const NavButton = ({label, destination, handleNavigation}) => {
  return (
    <div style={styles.base} onClick={() => handleNavigation(destination)}>
        { label }
    </div>
  );
};

export default Radium(NavButton);

const styles = {
  base: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    cursor: 'pointer',
    fontSize: '2vmin',
    fontWeight: '300',
    ':hover': {
      background: '#BFB09D'
    }
  }
};
