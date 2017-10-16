import React from 'react';

import Dimensioned from 'components/meta/Dimensioned.jsx';

const Project = ({injectedStyles, src, title, x}) => {
  return (
    <div
      key={title}
      style={{...styles.base}}
    >
      <ProjectImg src={src} x={x} />
    </div>
  );
};

const FullImg = ({dimensions, src, x}) => <div style={styles.image(dimensions, src, x)} />;

const ProjectImg = Dimensioned(FullImg);

export default Project;

const styles = {
  base: {
    height: '100%',
    width: '100%',

    display: 'flex',
    justifyContent: 'center'
  },
  image: (dimensions, src, x) => {
    return {
      background: `url("${src}")`,
      backgroundSize: 'cover',
      left: `${dimensions.width * x}`,
      width: '100vw',
      height: `${dimensions.height - 75}px`
    };
  }
};
