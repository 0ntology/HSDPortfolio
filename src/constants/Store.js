import { map } from 'lodash';
import { defaultKeyHandler } from 'utils/Utils.js';

import Keys, { portKeys } from 'constants/Keys.js';
import Media from 'constants/Media.js';
import Text from 'constants/Text.js';
import { BoxTypes } from 'constants/UI.js';

/**
 * Configurations
 */
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

// portfolio
const portfolioConfig = {
  [portKeys.tableOfContents]: [
    {
      label: 'Upper East Side',
      link: portKeys.upperEastSide,
      src: Media[Keys.portfolio][portKeys.upperEastSide].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.fifthAvenue,
      label: '5th Avenue',
      src: Media[Keys.portfolio][portKeys.fifthAvenue].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.eightySeventhStreet,
      label: '87th Street',
      src: Media[Keys.portfolio][portKeys.eightySeventhStreet].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.newYork,
      label: 'New York, NY',
      src: Media[Keys.portfolio][portKeys.newYork].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.madisonAvenue,
      label: 'Madison Avenue',
      src: Media[Keys.portfolio][portKeys.madisonAvenue].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.hamptonBays,
      label: 'Hampton Bays, NY',
      src: Media[Keys.portfolio][portKeys.hamptonBays].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.kidsBedrooms,
      label: `Kid's Bedroom`,
      src: Media[Keys.portfolio][portKeys.kidsBedrooms].cover,
      type: BoxTypes.hoverlink
    },
  ],
  [portKeys.upperEastSide]: [
    {
      link: portKeys.tableOfContents,
      label: 'Upper East Side',
      type: BoxTypes.link
    },
    ...map(Media[Keys.portfolio][portKeys.upperEastSide].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.fifthAvenue]: [
    {
      link: portKeys.tableOfContents,
      label: '5th Avenue',
      type: BoxTypes.link
    },
    ...map(Media[Keys.portfolio][portKeys.fifthAvenue].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.eightySeventhStreet]: [
    {
      link: portKeys.tableOfContents,
      label: '87th Street',
      type: BoxTypes.link
    },
    ...map(Media[Keys.portfolio][portKeys.eightySeventhStreet].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.newYork]: [
    {
      link: portKeys.tableOfContents,
      label: 'New York, NY',
      type: BoxTypes.link
    },
    ...map(Media[Keys.portfolio][portKeys.newYork].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.madisonAvenue]: [
    {
      link: portKeys.tableOfContents,
      label: 'Madison Avenue',
      type: BoxTypes.link
    },
    ...map(Media[Keys.portfolio][portKeys.madisonAvenue].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.hamptonBays]: [
    {
      link: portKeys.tableOfContents,
      label: 'Hampton Bays, NY',
      type: BoxTypes.link
    },
    ...map(Media[Keys.portfolio][portKeys.hamptonBays].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.kidsBedrooms]: [
    {
      link: portKeys.tableOfContents,
      label: `Kid's Bedrooms`,
      type: BoxTypes.link
    },
    ...map(Media[Keys.portfolio][portKeys.kidsBedrooms].feed, datum => ({...datum, type: BoxTypes.img}))
  ]
};

const portfolioProxy = new Proxy(portfolioConfig, defaultKeyHandler(portKeys.tableOfContents));

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
  [Keys.portfolio]: portfolioProxy,
  [Keys.navigation]: navConfig,
  [Keys.landing]: landingConfig,
};

export default Store;
