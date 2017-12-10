import React from 'react';
import Radium from 'radium';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import UI from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import FourLineBorder from 'components/common/graphics/FourLineBorderFlex.jsx';

const QuadBlock = ({ media }) =>
  <div style={styles.quadContainer}>
    <div style={styles.quadColumn}>
      <div style={styles.quadImage(media[0])}/>
      <div style={styles.quadImage(media[1])}/>
    </div>
    <div style={styles.quadColumn}>
      <div style={styles.quadImage(media[2])}/>
      <div style={styles.quadImage(media[3])}/>
    </div>
  </div>;

const Text = ({ content }) =>
  <div style={styles.textContainer}>
    { content }
  </div>;

/**
 * @func About
 */
const About = ({
  config: { media, txt: { body } },
  dimensions: { columns }
}) =>
  <div style={styles.container}>
    <QuadBlock media={media} />
    <Text content={body} />
  </div>;

export default Radium(Connect(Keys.pages.about)(Dimensioned(About)));

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
  quadContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50vw',
    height: '50vw',
    maxHeight: '50vh',
    maxWidth: '50vh'
  },
  quadColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%'
  },
  quadImage: (src) => ({
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50%',
    width: '100%',
    border: `4px solid white`,
    boxSizing: 'border-box',
  }),
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
