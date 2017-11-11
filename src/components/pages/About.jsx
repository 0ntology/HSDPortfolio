import React from 'react';
import Radium from 'radium';

import { flexCol, flexRow, flexCenter } from 'constants/Styles.js';
import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import Colors from 'constants/Colors.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

const ImageSection = ({config: {src, title}}) =>
  <div style={styles.imageContainer}>
    <div style={styles.image(src)} />
  </div>;

const TextSection = ({content}) =>
  <div style={styles.text}>
    { content }
  </div>;

const About = ({config: {media, txt: {body}}, dimensions}) =>
  <div style={styles.container(dimensions)}>
    <ImageSection config={media[0]} />
    <TextSection content={body} />
  </div>;

export default Radium(Connect(Keys.about)(Dimensioned(About)));

const styles = {
  container: dimensions => ({
    height: 'calc(100vh - 55px)',
    width: '100vw',
    padding: '0px 3px 6px 3px',
    boxSizing: 'border-box',
    overflow: 'auto',
    ...(dimensions.columns <= 2 ? flexCol : flexRow)
  }),
  imageContainer: {
    flex: '1',
    height: '100%',
    width: '100%',
    margin: '0px 3px 3px 3px',
    backgroundColor: Colors.offwhite,

    ...flexCenter,
    padding: '16px',
    boxSizing: 'border-box',
  },
  text: {
    flex: '2',
    height: '100%',
    width: '100%',
    margin: '0px 3px 3px 3px',
    fontFamily: Fonts.body,
    fontSize: '16pt',
    backgroundColor: Colors.offwhite,

    ...flexCenter,
    padding: '16px 24px 16px 24px',
    boxSizing: 'border-box',
  },
  image: src => ({
    backgroundImage: `url("${src}")`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    width: '100%',
    height: '100%',
    minHeight: '200px',
    maxHeight: '400px'
  }),
}
