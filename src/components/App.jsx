import React from  'react';

import Fonts from 'constants/Fonts.js';
import Colors from 'constants/Colors.js';

import Header from 'components/header/Header.jsx';
import View from 'components/View.jsx';

/* * * * * * * * * * * * * */

const App = () =>
  <div style={styles.base}>
    <Header/>
    <View />
  </div>;

export default App;

/* * * * * * * * * * * * * */

const styles = {
  base: {
    fontFamily: Fonts.body,
    fontWeight: '400',
    backgroundColor: Colors.white,

    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
    boxSizing: 'border-box'
  }
};
