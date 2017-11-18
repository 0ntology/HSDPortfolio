import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Keys from 'constants/Keys.js';
import Fonts from 'constants/Fonts.js';

import Hoverable from 'components/common/hoc/Hoverable.jsx';
import Connect from 'components/common/hoc/Connected.jsx';

import Colors from 'constants/Colors.js';

import FourLineBorder from 'components/common/graphics/FourLineBorder.jsx';

const BackgroundPane = ({src, hover}) => <div style={styles.background(src, hover)} />;
const BlurredPane = ({src, hover}) => <div style={styles.blurred(src, hover)} />;
const Emblem = ({content, hoverRef}) => <div ref={hoverRef} style={styles.initial}>{ content }</div>;

const FixedLanding = ({config, hover, hoverRef}) => {
  const src = config.media[0].src;
  return (
    <Link to="/home" style={styles.container}>
      <BackgroundPane hover={hover}  src={src} />
      <BlurredPane hover={hover}  src={src} />
      <Emblem content="HS" hoverRef={hoverRef} />
      <FourLineBorder customStyle={styles.border} />
    </Link>
  )
}

export default Hoverable(Connect(Keys.landing)(Radium(FixedLanding)));

const MARGIN = 8;
const BOXSIZE = `50vmin`;
const BOXTOP = `(100vh - ${BOXSIZE}) / 2`;
const BOXLEFT = `(100vw - ${BOXSIZE}) / 2`;

const styles = {
  container: {
    display: 'block',
    height: '100%',
    width: '100%',
    padding: `${MARGIN}px`,
    boxSizing: 'border-box',
  },
  background: (src, hover) => ({
    position: 'absolute',
    height: `calc(100% - ${2 * MARGIN}px)`,
    width: `calc(100% - ${2 * MARGIN}px)`,

    background: `url("${src}") no-repeat`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    transition: 'filter 1s ease',
    filter: hover ? 'blur(8px) contrast(1) saturate(1.5) invert(0.1)' : 'none',
  }),
  blurred: (src, hover) => ({
    position: 'absolute',
    top: `calc(${BOXTOP})`,
    left: `calc(${BOXLEFT})`,

    height: `calc(${BOXSIZE})`,
    width: `calc(${BOXSIZE})`,

    background: `url("${src}") no-repeat fixed`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    transition: 'filter .75s ease-out',
    filter: `blur(${hover ? '0px' : '15px'})`,
  }),
  initial: {
    position: 'absolute',
    top: `calc(${BOXTOP})`,
    left: `calc(${BOXLEFT})`,

    height: `calc(${BOXSIZE})`,
    width: `calc(${BOXSIZE})`,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: Colors.white,
    fontSize: '10vmin',
    fontFamily: Fonts.title,

    zIndex: 500
  },
  border: {
    position: 'absolute',
    top: `calc(${BOXTOP})`,
    left: `calc(${BOXLEFT})`,

    height: `calc(${BOXSIZE})`,
    width: `calc(${BOXSIZE})`,

    stroke: 'white',
    strokeWidth: '4px',
    //zIndex: 200,
  }
}
