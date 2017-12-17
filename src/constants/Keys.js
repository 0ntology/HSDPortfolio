/**
 * Keys - act like seeds in some cases.
 *
 */

const screens = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const portfolio = {
  directory: '/portfolio/',
  upperEastSide: '/portfolio/upperEastSide',
  fifthAvenue: '/portfolio/fifthAvenue',
  eightySeventhStreet: '/portfolio/eightySeventhStreet',
  newYork: '/portfolio/newYork',
  madisonAvenue: '/portfolio/madisonAvenue',
  hamptonBays: '/portfolio/hamptonBays',
  kidsBedrooms: '/portfolio/kidsBedrooms',
};

const icons = {
  leftArrow: 'leftArrow',
  rightArrow: 'rightArrow'
};

const pages = {
  about: 'about',
  contact: 'contact',
  portfolio: 'portfolio',
  home: 'home',
  landing: 'landing',
  archives: 'archives',
};

const destinations = {
  about: 'about',
  contact: 'contact',
  portfolio: 'portfolio',
  archives: 'archives'
}

const components = {
  header: 'header',
  navigator: 'navigator',
  initial: 'initial',
  title: 'title',
  fill: 'fill',
  map: 'map',
  mini: 'mini',
  close: 'close'
};

const archives = {
  archive1: 'archive1',
  archive2: 'archive2',
  archive3: 'archive3',
  archive4: 'archive4',
};

const images = {
  eightySeventhStreet0: 'eightySeventhStreet0',
  fifthAvenue0: 'fifthAvenue0',
  hamptonBays0: 'hamptonBays0',
  home0: 'home0',
  kids0: 'kids0',
  madisonAvenue0: 'madisonAvenue0',
  newYork0: 'newYork0',
  upperEastSide0: 'upperEastSide0',
};

const feeds = {
  [pages.about]: [
    'portrait',
    'personal1',
    'personal2',
    'personal3',
  ],
  [pages.home]: [
    'home3',
    'home4',
    'home1',
    'home0',
    'home2',
    'home5',
    'home6',
    'home7',
    'home8',
  ],
  [portfolio.directory]: [
    'upperEastSide0',
    'kids0',
    'madisonAvenue0',
    'newYork0',
    'hamptonBays0',
    'eightySeventhStreet0',
    'fifthAvenue0',
  ],
  [portfolio.upperEastSide]: [
    'upperEastSide0',
    'upperEastSide1',
    'upperEastSide2',
  ],
  [portfolio.fifthAvenue]: [
    'fifthAvenue0',
    'fifthAvenue1',
    'fifthAvenue2',
    'fifthAvenue3',
    'fifthAvenue4',
  ],
  [portfolio.eightySeventhStreet]: [
    'eightySeventhStreet0',
    'eightySeventhStreet1',
    'eightySeventhStreet2',
    'eightySeventhStreet3',
    'eightySeventhStreet4',
    'eightySeventhStreet5',
    'eightySeventhStreet6',
  ],
  [portfolio.newYork]: [
    'newYork0',
    'newYork1',
    'newYork2',
    'newYork3',
    'newYork4',
  ],
  [portfolio.madisonAvenue]: [
    'madisonAvenue0',
    'madisonAvenue1',
    'madisonAvenue2',
    'madisonAvenue3',
  ],
  [portfolio.hamptonBays]: [
    'hamptonBays0',
    'hamptonBays1',
    'hamptonBays2',
    'hamptonBays3',
    'hamptonBays4',
  ],
  [portfolio.kidsBedrooms]: [
    'kids0',
    'kids1',
    'kids2',
    'kids3',
    'kids4',
  ],
};

const Keys = {
  pages,
  destinations,
  archives,
  portfolio,
  screens,
  components,
  icons,
  feeds,
  images,
};

export default Keys;
