import React from 'react';

import RadiantLink from 'components/common/RadiantLink';
import {
  link,
  flexItem,
  flexCenter
} from 'constants/Styles.js';

const Title = () =>
  <RadiantLink to="/home" style={styles.container}>
    HARRY SCHNAPER
  </RadiantLink>;

export default Title;

const styles = {
  container: {
    fontSize: '22pt',
    ...link,
    ...flexItem,
    ...flexCenter
  },
}
