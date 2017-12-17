import Keys from 'constants/Keys.js';

/**-<< Types >>-**/

const Archive = (label, date, src, link) => ({
  label,
  date,
  src,
  link,
});

const Project = (label, src, type, link=Keys.portfolio.directory, index) => ({
  label,
  src,
  type,
  link,
  index
});

const Link = (label, destination) => ({
  label,
  destination,
});

const Page = (media, label, body) => ({
  media,
  label,
  body
});

const Nav = (links) => ({
  links,
});

/**-<< Export >>-**/

const Types = {
  Archive,
  Project,
  Link,
  Page,
  Nav
};

export default Types;
