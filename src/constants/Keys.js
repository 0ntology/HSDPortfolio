export const screenKeys = {
  small: 'small',
  medium: 'medium',
  large: 'large',
}

export const pageKeys = {
  about: 'about',
  contact: 'contact',
  portfolio: 'portfolio',
  home: 'home',
  landing: 'landing',
}

export const compKeys = {
  navigation: 'navigation',
  header: 'header',
  navigator: 'navigator',
  initial: 'initial',
  title: 'title',
  fill: 'fill',
  map: 'map',
  mini: 'mini',
  close: 'close'
}

export const portKeys = {
  tableOfContents: '/portfolio/',
  upperEastSide: '/portfolio/upperEastSide',
  fifthAvenue: '/portfolio/fifthAvenue',
  eightySeventhStreet: '/portfolio/eightySeventhStreet',
  newYork: '/portfolio/newYork',
  madisonAvenue: '/portfolio/madisonAvenue',
  hamptonBays: '/portfolio/hamptonBays',
  kidsBedrooms: '/portfolio/kidsBedrooms',
};

const Keys = {
  ...screenKeys,
  ...pageKeys,
  ...compKeys
}

export default Keys;
