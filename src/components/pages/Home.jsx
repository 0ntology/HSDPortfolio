import React from 'react';

import Keys from 'constants/Keys.js';

import Connect from 'components/common/hoc/Connected.jsx';
import Carousel from 'components/common/Carousel.jsx';

class Home extends React.Component {
  state = {
    selected: 0
  };

  handleClick = increment => {
    const {selected} = this.state;
    const {sources} = this.props;
    const newSelection = ( selected + increment ) % sources.length;

    this.setState({
      selected: newSelection >= 0 ? newSelection : sources.length - 1
    });
  };

  render() {
    const { selected } = this.state;
    const { config: {media} } = this.props;

    return (
      <div style={styles.base}>
        <Carousel
          config={media}
          selected={selected}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
};

export default Connect(Keys.home)(Home);

const styles = {
  base: {
    width: '100%',
    height: '90vh',
    boxSizing: 'border-box',
    overflow: 'hidden',
  }
};
