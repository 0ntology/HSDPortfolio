import React from 'react';

const ArrowButton = ({children, handleClick, injectedStyles}) => {
  return (
    <div style={{...styles.base, ...injectedStyles}} onClick={handleClick}>
      {children}
    </div>
  );
};

export default ArrowButton;

const styles = {
  base: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
};
