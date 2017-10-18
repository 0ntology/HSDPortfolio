import React from 'react';

const GalleryButton = ({children, handleClick, injectedStyles}) => {
  return (
    <div style={{...styles.base, ...injectedStyles}} onClick={handleClick}>
      {children}
    </div>
  );
};

export default GalleryButton;

const styles = {
  base: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  }
};
