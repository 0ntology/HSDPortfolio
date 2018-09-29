import React from 'react';
import { forEach, find, map } from 'lodash';
import UI from 'constants/UI.js';

/**
 * @class SwipeLayer:
 * A div which tracks user touches and exposes corresponding hooks.
 */
class SwipeLayer extends React.Component {

  state = {
    touches: []
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
      const swipe = this._getSwipe(touchStart, touchEnd);

      this.setState({ touches: [] }, () => {
        if (swipe) {
          this.props.onSwipe(swipe.direction);
        }}
      );
    });
  }

  _getSwipe = (touchStart, touchEnd) => {
    if (this._isSwipe(touchStart, touchEnd)) {
      return ({
        direction: this._calcDirection(touchStart, touchEnd)
      })
    }
  }

  _isSwipe = (touchStart, touchEnd) => {
    return (Math.abs(touchStart.pageX - touchEnd.pageX) > UI.touch.swipeThreshold);
  }

  _calcDirection = (touchStart, touchEnd) => {
    return ((touchEnd.pageX - touchStart.pageX) > 0)
      ? UI.directions.backward
      : UI.directions.forward;
  }

  render() {
    return (
      <div
        className={this.props.className}
        onTouchStart={this._handleTouchStart}
        onTouchEnd={this._handleTouchEnd}
      >
        { this.props.children }
      </div>
    )
  }
}

export default SwipeLayer;
