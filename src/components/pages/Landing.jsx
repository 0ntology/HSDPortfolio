import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Keys from 'constants/Keys.js';

import Hoverable from 'components/common/hoc/Hoverable.jsx';
import Connect from 'components/common/hoc/Connected.jsx';

import Colors from 'constants/Colors.js';
import { flexBottom } from 'constants/Styles.js';

import FourLineBorder from 'components/common/graphics/FourLineBorder.jsx';

/**
 * Emblem
 */
const Emblem = Radium(({hover, hoverRef}) =>
  <div ref={hoverRef} style={styles.emblem(hover)}>
    HS
  </div>
);

const Landing = ({config, hover, hoverRef}) =>
  <Link to='/home' style={styles.base}>
    <div style={styles.background(hover, config.media[0].src)} />
    <div style={styles.overlay}>
      <div style={styles.blur(config.media[0].src, hover)} />
      <FourLineBorder customStyles={styles.border} />
      <Emblem hover={hover} hoverRef={hoverRef} />
    </div>
  </Link>;

export default Radium(Hoverable(Connect(Keys.landing)(Landing)));

const styles = {
  base: {
    padding: '4px',
    boxSizing: 'border-box'
  },
  background: (hover, src) => {
    return {
      background: `url("${src}") no-repeat`,
      backgroundPosition: 'center',
      width: 'calc(100vw - 8px)',
      height: 'calc(100vh - 8px)',

      position: 'absolute',
      top: '4px',
      left: '4px',
      zIndex: '100',
      transition: 'filter .5s ease',

      filter: hover ? 'blur(8px) contrast(1) saturate(1.5) invert(0.1)' : ''
    }
  },
  overlay: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    top: '0px',
    left: '0px',
    zIndex: '150',
    color: Colors.white,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12vmax',
  },
  emblem: hover => {
    return {
      height: 'calc(50vmin - 65px)',
      width: 'calc(50vmin - 65px)',
      zIndex: '300',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      transition: 'background-color .5s ease, color .5s ease',

      backgroundColor: hover ? 'rgba(179, 176, 178, 0.54)' : '',
    }
  },
  blur: (src, hover) => {
    return {
      position: 'fixed',

      height: '50vmin',
      width: '50vmin',
      transition: 'filter .5s ease',
      filter: `blur(${hover ? '50px' : '15px'})`,
      background: `url("${src}") no-repeat fixed`,
      backgroundPosition: 'center',
    }
  },
  border: {
    position: 'fixed',

    height: '50vmin',
    width: '50vmin',
    stroke: 'white',
    strokeWidth: '4px',
    zIndex: 200

  },
}
