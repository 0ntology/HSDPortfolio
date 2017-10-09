import React from 'react';

import Blueprint from '../../constants/Blueprint.js';

const Project = ({injectedStyles, src, title}) => {
  return (
    <div
      key={title}
      style={{...styles.base, ...injectedStyles}}
    >
      <img
        src={src}
        alt={title}
        style={styles.image}
      />
    </div>
  );
};

export default Project;

const styles = {
  base: {
    height: '100%',
    width: '100%',

    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  }
};
