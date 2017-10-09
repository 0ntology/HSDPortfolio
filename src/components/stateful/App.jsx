import React, { Component } from  'react';

import Blueprint from             '../../constants/Blueprint.js';
import Palette from               '../../constants/Palette.js';
import Configurations from         '../../constants/Configurations.js';

import Header from    '../pure/Header.jsx';
import Logo from      '../pure/Logo.jsx';
import NavBar from    '../pure/NavBar.jsx';
import NavButtons from '../pure/NavButtons.jsx';
import Primary from '../pure/Primary.jsx';

class App extends Component {

  state = {
    page: Configurations.Pages.PORTFOLIO
  };

  /**
   * Construct the component.
   *
   */
  constructor(props) {
    super(props);

    this._handleNavigation = this._handleNavigation.bind(this);
  };

  /**
  * Handle the clicking of a navigation button.
  *
  */
  _handleNavigation = (link) => {
    this.setState({
      page: link
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
              handleClick={this.handleNavigation}
            />
          </NavBar>
        </Header>
        <Primary
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
