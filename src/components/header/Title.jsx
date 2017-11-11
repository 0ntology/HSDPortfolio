import React from 'react';

import Fonts from 'constants/Fonts.js';
import {
  link,
  flexItem,
  flexCenter
} from 'constants/Styles.js';


import RadiantLink from 'components/common/RadiantLink';

const title = 'HARRY SCHNAPER';
const Title = () =>
  <RadiantLink to="/home" style={styles.container}>
    { title }
  </RadiantLink>;

export default Title;

const styles = {
  container: {
    fontSize: '22pt',
    fontFamily: Fonts.title,
    ...link,
    ...flexItem,
    ...flexCenter
  },
}
