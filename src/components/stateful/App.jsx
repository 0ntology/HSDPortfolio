import React, { Component } from  'react';

import Palette from 'constants/Palette.js';
import Configurations from 'constants/Configurations.js';

import Header from 'components/pure/layout/Header.jsx';
import NavBar from 'components/pure/layout/NavBar.jsx';
import Router from 'components/pure/pages/Router.jsx';
import NavButtons from 'components/pure/buttons/NavButtons.jsx';
import Logo from 'components/pure/graphics/Logo.jsx';

class App extends Component {
  state = {
    /** page:
    * The currently selected page.
    * @type{string}
    */
    page: Configurations.Pages.PORTFOLIO
  };

  /**
  * Handle the clicking of a navigation button.
  *
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
    );
  };
};

export default App;

/* * * * * * * * * * * * * */

const styles = {
  base: {
    height: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateRows: '75px repeat(7, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    boxSizing: 'border-box',

    backgroundColor: Palette.white,
    gridGap: '0px',
    overflow: 'auto',
    fontFamily: 'Deco',
    fontWeight: '400'
  }
};
