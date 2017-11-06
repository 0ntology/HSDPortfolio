import React from 'react';
import Radium from 'radium';

const Image = ({src, title, customStyles}) => {
  return (
    <div
      key={title}
      style={styles.base}
    >
      <CoveringImage src={src} customStyles={customStyles} />
    </div>
  );
};

const CoveringImage = Radium(({src, customStyles}) =>
  <div style={[styles.image(src), customStyles]} />);

export default Image;

const styles = {
  base: {
      height: '100%',
      width: '100%',
  },
  image: src => {
    return {
      backgroundImage: `url("${src}")`,
      backgroundSize: 'cover',
    };
  }
};
