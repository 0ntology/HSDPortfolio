import { Component } from 'react';

export default class HoverableComponent extends Component {

  state = {
    hover: false
  };

  _toggleHover = to => {
    this.setState({
      hover: to
    });
  }

  _connect = el => {
    if (el) {
      el.addEventListener('mouseenter', (e) => this._toggleHover(true));
      el.addEventListener('mouseleave', (e) => this._toggleHover(false));
    }
  };

  render() {
    return this.props.children(this.state.hover, this._connect);
  }
}