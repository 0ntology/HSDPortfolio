import React from 'react';
import Radium from 'radium';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import UI from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import QuadImage from 'components/common/graphics/QuadImage.jsx';

/**
 * @func About
 */
const About = ({
  config: { media, txt: { body } },
  dimensions: { columns }
}) => (
  <div style={styles.container}>
    <QuadImage media={media} />
    <Text content={body} />
  </div>
);

export default Radium(Connect(Keys.pages.about)(Dimensioned(About)));

/** <<< Helpers >>> **/

const Text = ({ content }) =>
  <div style={styles.textContainer}>
    { content }
  </div>;

const styles = {
  container: {
    height: `calc(100vh - ${UI.header.height})`,
    width: '100vw',
    padding: `4px ${UI.spacing}px ${UI.spacing}px ${UI.spacing}px`,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textContainer: {
    width: '40vw',
    fontFamily: Fonts.text,
    fontSize: '12pt',
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  border: (numCols) => ({
    height: '100%',
    width: `${100 / numCols}%`,
    position: 'relative',
    left: `${[0,25,33][numCols-1]}%`
  }),
}
