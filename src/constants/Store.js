import { map, values } from 'lodash';
import { defaultKeyHandler } from 'utils/Utils.js';

import Keys, { portKeys } from 'constants/Keys.js';
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
      label: Text[Keys.pages.archives][key],
      src: Media[Keys.pages.archives][key],
      link: Routes[Keys.pages.archives]
    })
  )
};

// portfolio
const portfolioConfig = {
  [portKeys.tableOfContents]: [
    {
      label: 'Upper East Side',
      link: portKeys.upperEastSide,
      src: Media[Keys.pages.portfolio][portKeys.upperEastSide].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.fifthAvenue,
      label: '5th Avenue',
      src: Media[Keys.pages.portfolio][portKeys.fifthAvenue].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.eightySeventhStreet,
      label: '87th Street',
      src: Media[Keys.pages.portfolio][portKeys.eightySeventhStreet].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.newYork,
      label: 'New York, NY',
      src: Media[Keys.pages.portfolio][portKeys.newYork].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.madisonAvenue,
      label: 'Madison Avenue',
      src: Media[Keys.pages.portfolio][portKeys.madisonAvenue].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.hamptonBays,
      label: 'Hampton Bays, NY',
      src: Media[Keys.pages.portfolio][portKeys.hamptonBays].cover,
      type: BoxTypes.hoverlink
    },
    {
      link: portKeys.kidsBedrooms,
      label: `Kid's Bedroom`,
      src: Media[Keys.pages.portfolio][portKeys.kidsBedrooms].cover,
      type: BoxTypes.hoverlink
    },
  ],
  [portKeys.upperEastSide]: [
    {
      link: portKeys.tableOfContents,
      label: 'Upper East Side',
      type: BoxTypes.link
    },
    ...map(Media[Keys.pages.portfolio][portKeys.upperEastSide].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.fifthAvenue]: [
    {
      link: portKeys.tableOfContents,
      label: '5th Avenue',
      type: BoxTypes.link
    },
    ...map(Media[Keys.pages.portfolio][portKeys.fifthAvenue].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.eightySeventhStreet]: [
    {
      link: portKeys.tableOfContents,
      label: '87th Street',
      type: BoxTypes.link
    },
    ...map(Media[Keys.pages.portfolio][portKeys.eightySeventhStreet].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.newYork]: [
    {
      link: portKeys.tableOfContents,
      label: 'New York, NY',
      type: BoxTypes.link
    },
    ...map(Media[Keys.pages.portfolio][portKeys.newYork].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.madisonAvenue]: [
    {
      link: portKeys.tableOfContents,
      label: 'Madison Avenue',
      type: BoxTypes.link
    },
    ...map(Media[Keys.pages.portfolio][portKeys.madisonAvenue].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.hamptonBays]: [
    {
      link: portKeys.tableOfContents,
      label: 'Hampton Bays, NY',
      type: BoxTypes.link
    },
    ...map(Media[Keys.pages.portfolio][portKeys.hamptonBays].feed, datum => ({...datum, type: BoxTypes.img}))
  ],
  [portKeys.kidsBedrooms]: [
    {
      link: portKeys.tableOfContents,
      label: `Kid's Bedrooms`,
      type: BoxTypes.link
    },
    ...map(Media[Keys.pages.portfolio][portKeys.kidsBedrooms].feed, datum => ({...datum, type: BoxTypes.img}))
  ]
};

// configuration proxies
const portfolioProxy = new Proxy(
  portfolioConfig,
  defaultKeyHandler(portKeys.tableOfContents
));

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
