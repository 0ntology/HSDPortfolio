import React from 'react';

import Dimensioned from 'components/meta/Dimensioned.jsx';

const Project = ({injectedStyles, src, title}) => {
  return (
    <div
      key={title}
      style={{...styles.base, ...injectedStyles}}
    >
      <ProjectImg src={src} />
    </div>
  );
};

const FullImg = ({dimensions, src}) => <div style={styles.image(dimensions, src)} />;

const ProjectImg = Dimensioned(FullImg);

export default Project;

const styles = {
  base: {
    height: '100%',
    width: '100%',

    display: 'flex',
    justifyContent: 'center'
  },
  image: (dimensions, src) => {
    return {
      background: `url("${src}")`,
      backgroundSize: 'cover',
      width: '100%',
      height: `${dimensions.height - 75}px`
    };
  }
};
