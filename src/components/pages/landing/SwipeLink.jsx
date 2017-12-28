import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { find, forEach, map } from 'lodash';
import UI from 'constants/UI.js';

class SwipeLink extends Component {

  state = {
    touches: []
  }

  _onSwipe = () => {
    const { history, to } = this.props;

    history.push(to);
  }

  _handleTouchStart = ({changedTouches}) => {
    const initialTouches = map(changedTouches, ({identifier, pageX, pageY}) => ({
      identifier,
      pageX,
      pageY,
    }));

    this.setState({ touches: initialTouches });
  }

  _handleTouchEnd = ({changedTouches}) => {
    forEach(changedTouches, (touchEnd) => {
      const touchStart = find(this.state.touches, ['identifier', touchEnd.identifier]);
      const isSwipe = this._isSwipe(touchStart, touchEnd);

      this.setState({ touches: [] }, () => {
        if (isSwipe) {
          this._onSwipe();
        }}
      );
    });
  }

  _isSwipe = (touchStart, touchEnd) => {
    return (Math.abs(touchStart.pageX - touchEnd.pageX) > UI.touch.swipeThreshold);
  }

  render() {
    const { children, style, to } = this.props;

    return (
      <Link
        to={to}
        onTouchStart={this._handleTouchStart}
        onTouchEnd={this._handleTouchEnd}
        style={style}
      >
        { children }
      </Link>
    )
  }
}

export default withRouter(SwipeLink);
