import React from 'react';
import { map, find, forEach } from 'lodash';

import UI from 'constants/UI.js';

import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import Reel from './CarouselReel.jsx';
import Controls from './CarouselControls.jsx';

/**
 * @class Carousel:
 * Display media in a carousel format, with touch and click controls.
 */
class Carousel extends React.Component {

  /*-<< initials >>-*/

  state = {
    selected: 0,
    touches: []
  };

  /*-<< handlers >>-*/

  // handle the selection of a direction
  _handleSelection = (direction) => {
    switch (direction) {

      case UI.directions.forward:
        this._increment();
        break;

      case UI.directions.backward:
        this._decrement();
        break;

      default:
        console.log(`[err] unknown carousel direction: ${direction}`)

    }
  };

  // handle a touchstart event
  _handleTouchStart = ({changedTouches}) => {
    const initialTouches = map(changedTouches, ({identifier, pageX, pageY}) => ({
      identifier,
      pageX,
      pageY,
    }));

    this.setState({ touches: initialTouches });
  }

  // handle a touch end event
  _handleTouchEnd = ({changedTouches}) => {
    forEach(changedTouches, (touchEnd) => {
      const touchStart = find(this.state.touches, ['identifier', touchEnd.identifier]);

      this.setState({ touches: [] }, () => {
        if (this._isSwipe(touchStart, touchEnd)) {
          const swipeDirection = this._calcSwipeDirection(touchStart, touchEnd);
          this._handleSelection(swipeDirection);
        }}
      );
    });
  }

  /*-<< Mutators >>-*/

  _increment = () => {
    const selected = (this.state.selected + 1) % this.props.media.length;

    this.setState({ selected });
  }

  _decrement = () => {
    const selected = (this.state.selected - 1 > 0) ? (this.state.selected - 1) : 0;

    this.setState({ selected });
  }

  /*-<< Helpers >>-*/

  _isSwipe = (touchStart, touchEnd) => {
    return (Math.abs(touchStart.pageX - touchEnd.pageX) > UI.touch.swipeThreshold);
  }

  _calcSwipeDirection = (touchStart, touchEnd) => {
    return ((touchEnd.pageX - touchStart.pageX) > 0)
      ? UI.directions.backward
      : UI.directions.forward;
  }

  /*-<< Rendering >>-*/

  render () {
    return ([
      <Controls
        key="Carousel-Controls"
        onClick={this._handleSelection}
        onTouchStart={this._handleTouchStart}
        onTouchEnd={this._handleTouchEnd}
      />,
      <Reel
        key="Carousel-Reel"
        selected={this.state.selected}
        {...this.props}
      />
    ]);
  }
}

export default Dimensioned(Carousel);
