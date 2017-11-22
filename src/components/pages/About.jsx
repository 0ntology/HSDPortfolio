import React from 'react';
import Radium from 'radium';

import { flexCol, flexRow, flexCenter } from 'constants/Styles.js';
import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import Colors from 'constants/Colors.js';
import { Header } from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import FourLineBorder from 'components/common/graphics/FourLineBorderFlex.jsx';

const ImageSection = ({config: {src, title}}) =>
  <div style={styles.imageContainer}>
    <div style={styles.image(src)} />
  </div>;

const TextSection = ({content}) =>
  <div style={styles.text}>
    { content }
  </div>;

const About = ({config: {media, txt: {body}}, dimensions}) =>
  <FourLineBorder customStyle={styles.container}>
    <div style={styles.content}>
      <div style={styles.image(media[0].src)} />
      <p style={styles.text}>
        { body }
      </p>
    </div>
  </FourLineBorder>;

export default Radium(Connect(Keys.about)(Dimensioned(About)));

const styles = {
  container: {
    height: `calc(100vh - ${Header.height})`,
    width: '100vw',
    boxSizing: 'border-box',
  },
  content: {
    padding: '8px 24px 24px 24px',
    height: '100%',
    overflow: 'auto'
  },
  text: {
    fontFamily: Fonts.text,
    fontSize: '14pt',
    lineHeight: 1.5,
    textAlign: 'justify',
    margin: 0,
    padding: '24px 24px 24px 24px',
    boxSizing: 'border-box'
  },
  image: src => ({
    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '24px 24px 24px 24px',
    float: 'left',
    width: '25vw',
    height: '25vw',
  }),
}
