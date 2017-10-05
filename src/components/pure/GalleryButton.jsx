import React from 'react';

const GalleryButton = ({source, handleClick}) => {
  return (
    <div style={styles.base} onClick={handleClick}>
      <img src={source} alt="+"  />
    </div>
  );
};

export default GalleryButton;

const styles = {
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
