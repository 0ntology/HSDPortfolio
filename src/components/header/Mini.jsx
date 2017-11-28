import React from 'react';

import Styles from 'constants/Styles.js';
import Fonts from 'constants/Fonts.js';

const Mini = ({content, handleToggle}) =>
  <div onClick={handleToggle} style={styles.container}>
    { content }
  </div>;

export default Mini;

const styles = {
  container: {
    fontSize: '14pt',
    fontFamily: Fonts.body,
    paddingRight: '8px',
    ...Styles.link,
    ...Styles.flexItem,
    ...Styles.flexRight
  },
}
