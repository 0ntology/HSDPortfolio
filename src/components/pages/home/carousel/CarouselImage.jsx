import React from 'react';
import Radium from 'radium';

const Image = ({src, dimensions}) =>
  <div style={styles.base(dimensions)}>
    <div style={[styles.image(src)]} />
  </div>;

export default Radium(Image);

const styles = {
  base: dimensions => ({
    height: '100%',
    flex: ` 0 0 ${dimensions.width - 16}px`,
  }),
  image: src => {
    return {
      width: '100%',
      marginRight: '8px',
      height: '100%',

      backgroundImage: `url("${src}")`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  }
};
