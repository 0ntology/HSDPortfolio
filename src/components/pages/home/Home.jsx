import React from 'react';

import Keys from 'constants/Keys.js';
import UI from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Carousel from './carousel/Carousel.jsx';

const Home = ({ config }) => {
  return (
    <div style={styles.wrap}>
      <div style={styles.base}>
        <Carousel media={config.media} />
      </div>
    </div>
  )
}

export default Connect(Keys.pages.home)(Home);

const styles = {
  wrap: {
    height: `calc(100vh - ${UI.header.height})`,
    width: '100vw',

    padding: '0 8px 8px 8px',
    boxSizing: 'border-box',
  },
  base: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }
};
