import React from 'react';

import Fonts from 'constants/Fonts.js';
import {
  link,
  flexItem,
  flexStart,
  flexCenter
} from 'constants/Styles.js';


import RadiantLink from 'components/common/RadiantLink';

const title = 'HARRY SCHNAPER';
const subtitle = 'INCORPORATED';

const Title = () =>
  <RadiantLink to="/home" style={styles.container}>
    <div style={styles.wrap}>
      <div style={styles.title}>{ title }</div>
      <div style={styles.subtitle}>{ subtitle }</div>
    </div>
  </RadiantLink>;

export default Title;

const styles = {
  container: {
    display: 'block',
    ...link,
    ...flexItem,
    ...flexCenter,
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '75%',
  },
  title: {
    fontFamily: Fonts.title,
    fontSize: '18pt',
    textAlign: 'center',
    letterSpacing: '4px',
    height: '100%',
    width: '100%',
    marginTop: '8px'
  },
  subtitle: {
    fontFamily: Fonts.body,
    fontSize: '12pt',
    letterSpacing: '15px',
    textAlign: 'center',
    height: '100%',
    width: '100%',
  }
}
