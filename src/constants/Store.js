import { keyBy, map, values } from 'lodash';
import { defaultKeyHandler } from 'utils/Utils.js';

import Keys from 'constants/Keys.js';
import Media from 'constants/Media.js';
import Text from 'constants/Text.js';
import Routes from 'constants/Routes.js';
import { BoxTypes } from 'constants/UI.js';

/**
 * Configurations
 */

// navigation
export const navConfig = map(
  Keys.navigation,
  key => ({
   label: key,
   destination: `/${key}`
}));

// landing page
export const landingConfig = {
  media: Media[Keys.pages.landing]
};

// about page
export const aboutConfig = {
  media: Media[Keys.pages.about],
  txt: Text[Keys.pages.about]
};

// home page
export const homeConfig = {
  media: Media[Keys.pages.home]
};

// contact page
export const contactConfig = {
  media: Media[Keys.pages.contact]
};

// archives page
export const archives = {
  label: Text[Keys.pages.archives].label,
  archives: map(
    values(
      Keys.archives
    ),
    key => ({
      label: Text[Keys.pages.archives].archives[key],
      src: Media[Keys.pages.archives][key],
      link: Routes[Keys.pages.archives]
    })
  )
};

// portfolio page
const projectDirectory = map(
  values(
    Keys.portfolio
  ),
  key => ({
    link: key,
    label: Text[Keys.pages.portfolio].projects[key],
    src: Media.images[key],
    type: BoxTypes.hoverlink
  })
);

const projectHeader = key => ({
  type: BoxTypes.link,
  link: key,
  label: Text[Keys.pages.portfolio].projects[key]
});

const projectImages = key => map(
  Media[Keys.pages.portfolio][key].feed,
  src => ({
    src: src,
    type: BoxTypes.img
  })
);

const project = key => ({
  key: key,
  items: [
    projectHeader(key),
    ...projectImages(key)
  ]
});

const projects = keyBy(
  map(
    Keys.projects,
    project
  ),
  'key'
);

const portfolio = {
  [Keys.portfolio.directory]: projectDirectory,
  ...projects
};

// configuration proxies
const portfolioProxy = new Proxy(
  portfolio,
  defaultKeyHandler(Keys.portfolio.directory)
);

// Component configurations
const Store = {
  [Keys.pages.home]: homeConfig,
  [Keys.pages.about]: aboutConfig,
  [Keys.pages.contact]: contactConfig,
  [Keys.pages.portfolio]: portfolioProxy,
  [Keys.navigation]: navConfig,
  [Keys.pages.landing]: landingConfig,
  [Keys.pages.archives]: archives,
};

export default Store;
