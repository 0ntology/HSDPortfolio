import React from 'react';
import Radium from 'radium';

import Keys from 'constants/Keys.js';
import Connect from 'components/common/hoc/Connected.jsx';

const TextBox = Radium(({content, customStyles}) =>
  <div style={[styles.textBox, customStyles]}>
    <p style={styles.text}>
      { content }
    </p>
  </div>
);

const TextSection = ({txt}) =>
  <div style={styles.textSection}>
    <TextBox content={txt} />
    <TextBox content={"123 Madison Avenue"} customStyles={styles.addressBox} />
    <TextBox content={"Phone (616) 123 4567 Fax 987 6543"} customStyles={styles.addressBox} />
    <TextBox content={"email@harryschnaper.com"} customStyles={styles.addressBox} />
  </div>;

const ImageSection = ({src}) =>
  <div style={styles.imageSection}>
    <img src={src} alt="HSD" style={styles.image} />
  </div>;

const About = ({config: {media, txt}}) =>
  <div style={styles.base}>
    <ImageSection src={media[0]} />
    <TextSection txt={txt[0]} />
  </div>;

export default Radium(Connect(Keys.about)(About));

const styles = {
  base: {
    height: '100%',
    padding: '50px',
    boxSizing: 'border-box',
    overflow: 'auto',
    fontFamily: 'kepler-std-semicondensed-dis',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'start',

    '@media (max-width: 500px)': {
      flexDirection: 'column'
    }
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  textSection: {
    flex: '2'
  },
  imageSection: {
    marginTop: '5px',
    flex: '1',
    padding: '16px',
    boxSizing: 'border-box'
  },
  textBox: {

  },
  addressBox: {
    fontStyle: 'italic',
  },
  text: {
    lineHeight: '150%'
  }
}
