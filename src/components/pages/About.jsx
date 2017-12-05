import React from 'react';
import Radium from 'radium';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import UI from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import FourLineBorder from 'components/common/graphics/FourLineBorderFlex.jsx';

const About = ({
  config: {
    media,
    txt: {
      body
    }
  },
  dimensions: {
    columns
  }
}) =>
  <div style={styles.container}>
    <FourLineBorder customStyle={styles.border(columns)}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <div style={styles.image(media)} />
        </div>
        <div style={styles.text}>
          { body }
        </div>
      </div>
    </FourLineBorder>
  </div>;

export default Radium(Connect(Keys.pages.about)(Dimensioned(About)));

const styles = {
  container: {
    height: `calc(100vh - ${UI.header.height})`,
    width: '100vw',
    padding: `4px ${UI.spacing}px ${UI.spacing}px ${UI.spacing}px`,
    boxSizing: 'border-box',
  },
  border: (numCols) => ({
    height: '100%',
    width: `${100 / numCols}%`,
    position: 'relative',
    left: `${[0,25,33][numCols-1]}%`
  }),
  content: {
    boxSizing: 'border-box',
    height: '100%',
    overflow: 'auto',
  },
  text: {
    fontFamily: Fonts.text,
    fontSize: '12pt',
    lineHeight: 1.5,
    textAlign: 'justify',
    margin: 0,
    padding: '0px 24px 24px 24px',
    boxSizing: 'border-box'
  },
  imageContainer: {
    width: '100%',
    height: '33%',
    padding: '16px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: src => ({
    backgroundImage: `url("${src}")`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  }),
}
