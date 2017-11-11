import Keys from 'constants/Keys.js';
import Media from 'constants/Media.js';
import Text from 'constants/Text.js';

// Page configuration
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

// Component configurations
export const navConfig = [
  {label: 'P O R T F O L I O', destination: Keys.portfolio},
  {label: 'A B O U T', destination: Keys.about},
  {label: 'C O N T A C T', destination: Keys.contact}
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
