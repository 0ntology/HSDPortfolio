import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Colors from 'constants/Colors.js';
import Fonts from 'constants/Fonts.js';
import Keys from 'constants/Keys.js';
import UI from 'constants/UI.js';

import Hoverable from 'components/common/hoc/Hoverable.jsx';
import Connect from 'components/common/hoc/Connected.jsx';

import QuadBorder from 'components/common/svg/QuadBorder.jsx';

const BackgroundPane = ({src, hover}) => <div style={styles.background(src, hover)} />;
const BlurredPane = ({src, hover}) => <div style={styles.blurred(src, hover)} />;
const Emblem = ({content, hoverRef}) => <div ref={hoverRef} style={styles.initial}>{ content }</div>;
const WhiteLineBorder = () => <div style={styles.whitelineborder} />

const Landing = ({config, hover, hoverRef}) => {
  const { media: src } = config;

  return (
    <Link to="/home" style={styles.container}>
      <BackgroundPane hover={hover}  src={src} />
      <BlurredPane hover={hover}  src={src} />
      <Emblem content="HS" hoverRef={hoverRef} />
      <QuadBorder customStyle={styles.border} />
      <WhiteLineBorder />
    </Link>
  )
}

export default Hoverable(Connect(Keys.pages.landing)(Radium(Landing)));

/** Styles **/
const MARGIN = 0;
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
    filter: hover ? 'blur(8px)' : 'none',
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
    filter: hover ? `blur(0px) grayscale(100%)` : 'blur(15px) grayscale(0%)',
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
  },
  whitelineborder: {
    position: 'absolute',
    height: `calc(100% - ${2 * MARGIN}px)`,
    width: `calc(100% - ${2 * MARGIN}px)`,
    border: `${UI.spacing/2}px solid white`,
    boxSizing: 'border-box',
  }
}
