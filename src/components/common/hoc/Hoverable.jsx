import React, { Component } from 'react';

/**
 * Hoverable HOC
 */
const Hoverable = InnerComponent => {
  return class HoverableComponent extends Component {
    state = {
      hover: false
    };

    _toggleHover = to => {
      console.log('[Hover Event]');

      this.setState({
        hover: to
      });

    }

    _connect = el => {
      if (el) {
        console.log('[Hover Connection]');

        el.addEventListener('mouseenter', (e) => this._toggleHover(true));
        el.addEventListener('mouseleave', (e) => this._toggleHover(false));
      }
    };

    render() {
      const { hover } = this.state;

      return (
        <InnerComponent
          hoverRef={this._connect}
          hover={hover}
        />
      );
    }
  }
}

export default Hoverable;
