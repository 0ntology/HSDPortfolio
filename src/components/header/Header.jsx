import React, { Component } from 'react';
import Radium from 'radium';
import { map, pick } from 'lodash';
import { withRouter } from 'react-router';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';
import Colors from 'constants/Colors.js';
import Styles from 'constants/Styles.js';

import Dimensioned from 'components/common/hoc/Dimensioned.jsx';

import Navigator from 'components/header/Navigator.jsx';
import Dropdown from 'components/header/Dropdown.jsx';

// TODO - abstract the following into single item component which takes text content and custom styles
import Initial from 'components/header/Initial.jsx';
import Title from 'components/header/Title.jsx';
import Fill from 'components/header/Fill.jsx';
import Mini from 'components/header/Mini.jsx';
import Close from 'components/header/Close.jsx';

const {
  navigator,
  initial,
  title,
  fill,
  mini,
  close,
} = Keys.components;

const points = {
  [navigator]: {
    Comp: Navigator,
    profile: ['config', 'current'],
  },
  [initial]: {
    Comp: Initial,
    profile: [],
  },
  [title]: {
    Comp: Title,
    profile: [],
  },
  [fill]: {
    Comp: Fill,
    profile: []
  },
  [mini]: {
    Comp: Mini,
    config: {content: 'M E N U'},
    profile: [],
    contexts: ['handleToggle']
  },
  [close]: {
    Comp: Close,
    config: {content: 'C L O S E'},
    contexts: ['handleToggle']
  }
};

const space = [
  [fill, initial, close],
  [fill, initial, mini],
  [title, navigator],
  [title, fill, navigator],
];

class Header extends Component {
  state = {
    isOpen: false
  }

  handleToggle = () => this.setState({
    isOpen: !this.state.isOpen
  });

  render() {
    const { dimensions: { columns }, location: { pathname } } = this.props;
    if (pathname === "/") return false;

    const { isOpen } = this.state;
    const position = isOpen ? 0 : columns;
    const items = space[position]

    return (
      <div style={styles.base}>
        { map(
            items,
            (key, i) => {
              const { Comp, config, contexts, profile } = points[key];

              return (
                <Comp
                  key={`${key}-${i}`}
                  {...config}
                  {...(contexts && pick(this, contexts))}
                  {...pick(this.props, profile)}
                />
              )
            }
          )
        }
        { isOpen && <Dropdown handleToggle={this.handleToggle} /> }
      </div>
    )
  }
}

export default withRouter(Dimensioned(Radium(Header)));

const styles = {
  base: {
    ...Styles.flexRow,
    position: 'relative',
    zIndex: '1',
    padding: '4px',
    height: '70px',
    width: '100vw',
    boxSizing: 'border-box',

    fontFamily: Fonts.body,
    backgroundColor: 'white',
    color: Colors.black,
  },
};
