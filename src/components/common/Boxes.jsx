import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom';

import Fonts from 'constants/Fonts.js';
import { Header } from 'constants/UI.js';

import Hoverable from 'components/common/hoc/Hoverable.jsx';
import FourLineBorder from 'components/common/graphics/FourLineBorderFlex.jsx';

const RawImgBox = ({src, cols}) =>
  <div style={styles.box(cols)}>
    <div key={src} style={styles.img(src)} />
  </div>;

const RawLinkBox = ({label, link, cols}) =>
  <Link to={link} style={{...styles.box(cols), ...styles.link}}>
    <FourLineBorder customStyle={styles.border}>
      <div style={styles.label}>
        { label }
      </div>
    </FourLineBorder>
  </Link>;

const RawHoverlinkBox = ({hover, hoverRef, src, link, label, cols}) =>
  <Link to={link} style={{...styles.box(cols), ...styles.link}}>
    <div key={link} style={{...styles.img(src), ...styles.opacityHover(hover, false)}} />
    <FourLineBorder customStyle={{...styles.border, ...styles.opacityHover(hover)}}>
      <div ref={hoverRef} style={{...styles.label, ...styles.opacityHover(hover)}}>
        { label }
      </div>
    </FourLineBorder>
  </Link>;

export const HoverlinkBox = Radium(Hoverable(RawHoverlinkBox));
export const ImgBox = Radium(RawImgBox);
export const LinkBox = Radium(RawLinkBox);

const styles = {
  box: cols => ({
    position: 'relative',
    display: 'block',
    margin: '0 4px 8px 4px',
    width: '100%',
    height: `calc((100vw - ${Header.height}) / ${cols})`,
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
}
