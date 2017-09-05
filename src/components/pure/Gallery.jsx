import React from 'react';

import Project from './Project.jsx';

const Gallery = ({sources}) => {
  const projects = sources.map(Project);

  return (
    <div style={styles.base}>
      { projects }
    </div>
  );
};

export default Gallery;

const styles = {
  base: {
    gridRow: '2 / 9',
    gridColumn: '1 / 9',

    height: '100%',
    width: '100%',
  }
};
