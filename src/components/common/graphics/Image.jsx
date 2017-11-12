import React from 'react';
import Radium from 'radium';

const Image = ({src, customStyles}) =>
  <div style={styles.base}>
    <div style={[styles.image(src), customStyles]} />
  </div>;

export default Radium(Image);

const styles = {
  base: {
    height: '100%',
    width: '100%',
  },
  image: src => {
    return {
      backgroundImage: `url("${src}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  }
};
