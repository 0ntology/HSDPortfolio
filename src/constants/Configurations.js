export const Pages = {
  ABOUT: 'About',
  PORTFOLIO: 'Portfolio',
  PRESS: 'Press',
  CONTACT: 'Contact'
};

const Navigation = [
  {label: 'portfolio', destination: Pages.PORTFOLIO},
  {label: 'press', destination: Pages.PRESS},
  {label: 'about', destination: Pages.ABOUT},
  {label: 'contact', destination: Pages.CONTACT},
];

const Configurations = {
  Navigation: Navigation,
  Pages: Pages
};

export default Configurations;
