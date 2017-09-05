import React, { Component } from  'react';

import Media from                 '../../media/media.js';
import Blueprint from             '../../constants/Blueprint.js';
import Palette from               '../../constants/Palette.js';
import Configurations from         '../../constants/Configurations.js';

import Header from    '../pure/Header.jsx';
import Logo from      '../pure/Logo.jsx';
import NavBar from    '../pure/NavBar.jsx';
import NavButton from '../pure/NavButton.jsx';
import Gallery from   '../pure/Gallery.jsx';

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

  /**
   * Generates the primary content depending on 'page'.
   *
   */
  _generatePrimary = () => {
    const { page } = this.state;
    const { Pages } = Configurations;

    switch (page) {
      case Pages.PORTFOLIO: return <Gallery sources={Media}/>;
      case Pages.ABOUT:
      case Pages.PROBONO:
      case Pages.CONTACT:
      case Pages.PRESS:
      default: return <div> NOT IMPLEMENTED </div>;
    }
  };

  /**
   * Generate navigation buttons
   *
   */
  _generateNavButtons = () => {
    const { Navigation } = Configurations;

    return Navigation.map((destinationData) => <NavButton {...destinationData} handleNavigation={this._handleNavigation} />);
  };

  render() {
    const primary = this._generatePrimary();
    const navButtons = this._generateNavButtons();

    return (
      <div style={styles.base}>

        <Header>
          <Logo />
          <NavBar>
            { navButtons }
          </NavBar>
        </Header>

        { primary }

      </div>
    );
  };
};

export default App;

/* * * * * * * * * * * * * */

const styles = {
  base: {
    ...Blueprint.grid(8,8),
    backgroundColor: Palette.beamLight,
    gridGap: '5px',
    overflow: 'auto'
  }
};
