import React from 'react';

/**
 * Sticky :
 *  Make a component stick to the top of window.
 */
class Sticky extends React.Component {
  state = {
    position: 0
  };

  constructor(props) {
    super(props);

    this._handleScroll = this._handleScroll.bind(this);
  };

  _handleScroll = (e) => {
    console.log('[scrolling...]' + e);
  };

  render() {
    const { children } = this.props;

    return (
      <div
        ref={(element) => {this.containerRef = element}}
        onScroll={this.handleScroll}>
        { children }
      </div>
    );
  };

};

const styles = {

};
