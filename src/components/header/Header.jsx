import React, { Component } from 'react';
import Radium from 'radium';
import { withRouter } from 'react-router-dom';

import Fonts from 'constants/Fonts.js';
import Colors from 'constants/Colors.js';

import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

import SmallHeader from './SmallHeader.jsx';
import MediumHeader from './MediumHeader.jsx';
import WideHeader from './WideHeader.jsx';

class Header extends Component {
  state = {
    isOpen: false
  }

  _handleToggle = () => this.setState({
    isOpen: !this.state.isOpen
  });

  _getHeaderItems = (columns) => {
    if (columns === 3) {
      return WideHeader;
    }
    else if (columns === 2) {
      return MediumHeader;
    }
    else {
      return SmallHeader;
    }
  }

  render() {
    if (this.props.location.pathname === "/") {
      return false;
    }

    const { isOpen } = this.state;
    const { columns } = this.props.dimensions;
    const HeaderItems = this._getHeaderItems(columns);

    return (
      <div style={styles.base}>
        <HeaderItems isOpen={isOpen} onToggle={this._handleToggle} />
      </div>
    )
  }
}

export default withRouter(Dimensioned(Radium(Header)));

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'relative',
    height: '70px',
    width: '100vw',
    zIndex: '1',

    padding: '4px',
    boxSizing: 'border-box',

    fontFamily: Fonts.body,
    backgroundColor: 'white',
    color: Colors.black,
  }
};
