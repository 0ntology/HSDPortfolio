import React from 'react';

import Keys from 'constants/Keys.js';
import { Header } from 'constants/UI.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Carousel from 'components/common/Carousel.jsx';

class Home extends React.Component {
  state = {
    selected: 0
  };

  handleClick = increment => {
    const {selected} = this.state;
    const {config: {media}} = this.props;
    const newSelection = ( selected + increment ) % media.length;

    this.setState({
      selected: newSelection >= 0 ? newSelection : media.length - 1
    });
  };

  render() {
    const { selected } = this.state;
    const { config: {media} } = this.props;

    return (
      <div style={styles.wrap}>
        <div style={styles.base}>
          <Carousel
            config={media}
            selected={selected}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
};

export default Connect(Keys.pages.home)(Home);

const styles = {
  wrap: {
    height: `calc(100vh - ${Header.height})`,
    width: '100%',

    padding: '0 8px 8px 8px',
    boxSizing: 'border-box',
  },
  base: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }
};
