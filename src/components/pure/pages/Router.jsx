import React from 'react';

import Media from 'media/media.js';
import Pages from 'constants/Configurations.js';

import Gallery from './Gallery.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Press from './Press.jsx';

const lookup = ({current}) => {
  switch (current) {
    case Pages.PORTFOLIO:
      return <Gallery sources={Media} />;
    case Pages.ABOUT:
      return <About />;
    case Pages.CONTACT:
      return <Contact />;
    case Pages.PRESS:
      return <Press />;
    default:
      return <div> NOT IMPLEMENTED </div>;
  }
};

const Router = ({current}) => lookup(current);

export default Router;
