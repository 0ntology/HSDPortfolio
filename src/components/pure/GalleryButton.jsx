import React from 'react';

const GalleryButton = ({injectedStyles, source, handleClick}) => {
  return (
    <div
      style={{...styles.base, ...injectedStyles}}
      onClick={handleClick}
    >
      <img src={source} alt="+"  />
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
