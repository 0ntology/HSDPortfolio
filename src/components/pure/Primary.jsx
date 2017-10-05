import React from 'react';

import Media from '../../media/media.js';
import Pages from '../../constants/Configurations.js';

import Gallery from './Gallery.jsx';

const Lookup = ({current}) => {
  switch (current) {
    case Pages.PORTFOLIO:
      return <Gallery sources={Media} />;
    case Pages.ABOUT:
    case Pages.PROBONO:
    case Pages.CONTACT:
    case Pages.PRESS:
    default:
      return <div> NOT IMPLEMENTED </div>;
  }
};

const Primary = ({current}) => Lookup(current);

export default Primary;
