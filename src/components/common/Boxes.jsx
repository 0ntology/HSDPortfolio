import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Fonts from 'constants/Fonts.js';
import UI from 'constants/UI.js';

import Hoverable from 'components/common/hoc/Hoverable.jsx';
import FourLineBorder from 'components/common/graphics/FourLineBorderFlex.jsx';

export const IconBox = Radium(({
  link,
  cols,
  icon
}) => (
  <Link to={link} style={{...styles.box(cols), ...styles.link, ...styles.icon}}>
    { icon }
  </Link>
));

export const ImgBox = Radium(({
  src,
  cols
}) => (
  <div style={styles.box(cols)}>
    <div key={src} style={styles.img(src)} />
  </div>
));

export const LinkBox = Radium(({
  label,
  link,
  cols
}) => (
  <Link to={link} style={{...styles.box(cols), ...styles.link}}>
    <FourLineBorder customStyle={styles.border}>
      <div style={styles.label}>
        { label }
      </div>
    </FourLineBorder>
  </Link>
));

export const HoverlinkBox = Radium(Hoverable(({
  hover,
  hoverRef,
  src,
  link,
  label,
  cols
}) =>
  <Link to={link} style={{...styles.box(cols), ...styles.link}}>
    <div key={link} style={{...styles.img(src), ...styles.opacityHover(hover, false)}} />
    <FourLineBorder customStyle={{...styles.border, ...styles.opacityHover(hover)}}>
      <div ref={hoverRef} style={{...styles.label, ...styles.opacityHover(hover)}}>
        { label }
      </div>
    </FourLineBorder>
  </Link>
));

const styles = {
  box: cols => ({
    position: 'relative',
    display: 'block',
    margin: '0 4px 8px 4px',
    width: '100%',
    height: `calc(100vw / ${cols})`,
  }),
  img: src => ({
    height: '100%',
    width: '100%',

    backgroundImage: `url("${src}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
  label: {
    zIndex: 200,
    height: '100%',
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: 'white',
    fontFamily: Fonts.body,
    textTransform: 'uppercase',
    letterSpacing: '5px',
  },
  border: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  link: {
    cursor: 'pointer',
    display: 'block',
    textDecoration: 'none'
  },
  opacityHover: (hover, inverted=true) => ({
    opacity: hover ? (inverted ? 1 : 0) : (inverted ? 0 : 1),
    transition: 'all 1s ease',
  }),
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}