import React from 'react';

import Fonts from 'constants/Fonts.js';
import Styles from 'constants/Styles.js';


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
    ...Styles.link,
    ...Styles.flexItem,
    ...Styles.flexCenter,
  },
  wrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    fontFamily: Fonts.title,
    fontSize: '18pt',
    textAlign: 'center',
    letterSpacing: '4px',
    height: '50%',
    width: '100%',
    margin: '8px 0 0 4px',
  },
  subtitle: {
    fontFamily: Fonts.body,
    fontSize: '12pt',
    letterSpacing: '18px',
    marginLeft: '18px',
    textAlign: 'center',
    height: '50%',
    width: '100%',
  }
}
