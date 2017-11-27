/**
 * UI
 */
export const screenKeys = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

/**
 * Data
 */
const pages = {
  about: 'about',
  contact: 'contact',
  portfolio: 'portfolio',
  home: 'home',
  landing: 'landing',
  archives: 'archives',
};

export const compKeys = {
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
  architecturalDigest1: 'architecturalDigest1',
  architecturalDigest2: 'architecturalDigest2',
  architecturalDigest3: 'architecturalDigest3',
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

const projects = {
  upperEastSide: '/portfolio/upperEastSide',
  fifthAvenue: '/portfolio/fifthAvenue',
  eightySeventhStreet: '/portfolio/eightySeventhStreet',
  newYork: '/portfolio/newYork',
  madisonAvenue: '/portfolio/madisonAvenue',
  hamptonBays: '/portfolio/hamptonBays',
  kidsBedrooms: '/portfolio/kidsBedrooms',
};

const navigation = {
  about: 'about',
  contact: 'contact',
  portfolio: 'portfolio',
  archives: 'archives'
}

const Keys = {
  pages,
  navigation,
  archives,
  portfolio,
  projects,
  ...screenKeys,
  ...compKeys
};

export default Keys;
