import React from 'react';
import Radium from 'radium';

import { Link } from 'react-router-dom';

import Styles from 'constants/Styles.js';
import Fonts from 'constants/Fonts.js';

const RadiantLink = Radium(Link);

const Initial = () =>
  <RadiantLink to="/home" style={styles.container}>
    HS
  </RadiantLink>;

export default Initial;

const styles = {
  container: {
    fontSize: '22pt',
    fontFamily: Fonts.title,
    ...Styles.link,
    ...Styles.flexItem,
    ...Styles.flexCenter
  },
}
