import Keys from 'constants/Keys.js';
import Media from 'constants/Media.js';
import Text from 'constants/Text.js';

// Pages
export const landingConfig = {
  media: Media[Keys.landing]
};

export const aboutConfig = {
  media: Media[Keys.about],
  txt: Text[Keys.about]
};

export const homeConfig = {
  media: Media[Keys.home]
};

export const contactConfig = {
  media: Media[Keys.contact]
};

export const portfolioConfig = {
  media: Media[Keys.portfolio]
};

export const navConfig = [
  {label: 'Portfolio', destination: Keys.portfolio},
  {label: 'About', destination: Keys.about},
  {label: 'Contact', destination: Keys.contact}
];

const Store = {
  [Keys.home]: homeConfig,
  [Keys.about]: aboutConfig,
  [Keys.contact]: contactConfig,
  [Keys.portfolio]: portfolioConfig,
  [Keys.navigation]: navConfig,
  [Keys.landing]: landingConfig,
};

export default Store;
