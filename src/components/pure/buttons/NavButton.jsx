import React from 'react';

const NavButton = ({label, destination, handleNavigation}) => {
  return (
    <div onClick={() => handleNavigation(destination)}>
      <div style={styles.label}>
        { label }
      </div>
    </div>
  );
};

export default NavButton;

const styles = {
  label: {
    cursor: 'pointer',
    fontSize: '2vmin',
    fontWeight: '300'
  }
};
