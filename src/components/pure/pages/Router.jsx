import React from 'react';

import Media from 'media/media.js';
import { AboutPage, Pages } from 'constants/Configurations.js';

import Gallery from './Gallery.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Press from './Press.jsx';

const Router = ({current}) => {
  switch (current) {
    case Pages.PORTFOLIO:
      return <Gallery sources={Media} />;
    case Pages.ABOUT:
      return <About {...AboutPage} />;
    case Pages.CONTACT:
      return <Contact />;
    case Pages.PRESS:
      return <Press />;
    default:
      return <div> NOT IMPLEMENTED </div>;
  }
}

export default Router;
