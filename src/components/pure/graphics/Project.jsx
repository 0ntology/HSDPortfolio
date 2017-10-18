import React from 'react';

import Dimensioned from 'components/meta/Dimensioned.jsx';

const Project = ({dimensions, src, title, x}) => {
  return (
    <div
      key={title}
      style={styles.base(dimensions, x)}
    >
      <CoveringImage src={src} />
    </div>
  );
};

const CoveringImage = ({src}) =>
  <div style={styles.image(src)} />;

export default Dimensioned(Project);

const styles = {
  base: (dimensions, x) => {
    return {
      height: '100%',
      width: '100%',
      //position: 'absolute',
      //left: `${dimensions.width * x}`,
    }
  },
  image: src => {
    return {
      background: `url("${src}")`,
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw'
    };
  }
};
