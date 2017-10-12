import React from 'react';

const GalleryButton = ({children, handleClick, injectedStyles}) => {
  return (
    <div
      style={{...styles.base, ...injectedStyles}}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default GalleryButton;

const styles = {
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  }
};
