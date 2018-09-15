import React from 'react'

export default class Toggle extends React.Component {
  state = {
    isOpen: false
  }

  _handleToggle = () => this.setState({
    isOpen: !this.state.isOpen
  });

  render() {
    return this.props.children(this.state.open, this._handleToggle);
  }
}