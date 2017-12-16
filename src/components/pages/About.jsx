import React from 'react';
import Radium from 'radium';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import UI from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import QuadImage from 'components/common/graphics/QuadImage.jsx';

const About = ({
  config: { media, txt: { body } },
  dimensions: { columns }
}) => (
  <div style={styles.container(columns)}>
    <QuadImage
      media={media}
      style={styles.quadContainer}
    />
    <div style={styles.textContainer}>
      { body }
    </div>
  </div>
);

export default Radium(Connect(Keys.pages.about)(Dimensioned(About)));

const styles = {
  container: columns => ({
    height: `calc(100vh - ${UI.header.height})`,
    width: '100vw',

    padding: `24px 120px 24px 120px`,
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    overflow: 'auto'
  }),
  textContainer: {
    fontFamily: Fonts.text,
    fontSize: '12pt',
    lineHeight: 1.5,
    textAlign: 'justify',

    width: '75vw',
    height: '75vw',
    maxWidth: '60vh',
    maxHeight: '60vh',
    padding: '24px 0px'
  },
  quadContainer: {
    width: '75vw',
    height: '75vw',
    maxWidth: '60vh',
    maxHeight: '60vh',
  }
}
