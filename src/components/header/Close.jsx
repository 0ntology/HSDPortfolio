import React from 'react';

import {
  link,
  flexItem,
  flexRight
} from 'constants/Styles.js';
import Fonts from 'constants/Fonts.js';

const Close = ({content, handleToggle}) =>
  <div onClick={handleToggle} style={styles.container}>
    { content }
  </div>;

export default Close;

const styles = {
  container: {
    fontSize: '14pt',
    fontFamily: Fonts.body,
    paddingRight: '8px',
    ...link,
    ...flexItem,
    ...flexRight
  },
}
