import React, { Component } from  'react';
import { StyleRoot } from 'radium';

import Palette from 'constants/Palette.js';
import Configurations from 'constants/Configurations.js';

import Header from 'components/pure/layout/Header.jsx';
import NavBar from 'components/pure/layout/NavBar.jsx';
import Router from 'components/pure/pages/Router.jsx';
import NavButtons from 'components/pure/buttons/NavButtons.jsx';
import Logo from 'components/pure/graphics/Logo.jsx';

class App extends Component {
  state = {
    /**
     * @type {string} - key of the current page
     */
    page: Configurations.Pages.PORTFOLIO
  };

  /**
   * Handle the clicking of a navigation button.
   */
  _handleNavigation = (toPage) => {
    this.setState({
      page: toPage
    });
  };

  render() {
    const {page} = this.state;
    const {Navigation, Pages} = Configurations;

    return (
      <StyleRoot>
        <div style={styles.base}>
          <Header>
            <Logo />
            <NavBar>
              <NavButtons
                config={Navigation}
                handleClick={this._handleNavigation}
              />
            </NavBar>
          </Header>
          <Router
            config={Pages}
            current={page}
          />
        </div>
      </StyleRoot>
    );
  };
};

export default App;

/* * * * * * * * * * * * * */

const styles = {
  base: {
    height: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    overflow: 'hidden',

    /**TODO: upon browser support!
    display: 'grid',
    gridTemplateRows: '75px repeat(7, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gridGap: '0px',**/

    backgroundColor: Palette.white,
    fontFamily: 'Deco',
    fontWeight: '400'
  }
};
