// external
import React, { Component } from  'react';
import { HashRouter } from 'react-router-dom';
import { StyleRoot } from 'radium';
import Typekit from 'react-typekit';

import App from 'components/App.jsx';

class AppContainer extends Component {
  render() {
    return (
      <StyleRoot>
        <HashRouter>
          <App />
        </HashRouter>
      </StyleRoot>
    );
  };
};

export default AppContainer;
