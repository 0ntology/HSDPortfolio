import React from 'react';

import Blueprint from '../../constants/Blueprint.js';

const Project = ({title, src}) => {
  return (
    <div
      key={title}
      style={styles.base}
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
    //alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    ...Blueprint.image
  }
};
