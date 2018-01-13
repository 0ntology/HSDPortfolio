// external
import React, { Component } from  'react';
import { HashRouter } from 'react-router-dom';
import { StyleRoot } from 'radium';

import App from 'components/App.jsx';
import ScrollController from 'components/ScrollController.jsx';

class AppContainer extends Component {
  render() {
    return (
      <StyleRoot>
        <HashRouter>
          <ScrollController>
            <App />
          </ScrollController>
        </HashRouter>
      </StyleRoot>
    );
  };
};

export default AppContainer;
