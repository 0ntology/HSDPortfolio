import { aboutPhoto } from '../media/media.js';

export const Pages = {
  ABOUT: 'About',
  PORTFOLIO: 'Portfolio',
  PRESS: 'Press',
  CONTACT: 'Contact'
};

const aboutText = "Following  careers in education, the culinary arts and fashion, Harry Schnaper moved to London, where he earned a degree in Interior Design from The Chelsea School of Art. He left London in 1983 to join Gay Mattheai Interiors, and later worked as a staff designer for Robert Metzger. Harry Schnaper Incorporated was founded in 1989.\nA thorough understanding of his clients' needs is essential to the success of each project. The stylish serenity of his work is contemporary in concept but historical in reference, with a pro-architecture approach. He encourages his clients to focus on background, believing that once the architectural envelope is correct, the stage is set for furniture, lighting and accessories to create a seamless, integrated whole. Editing for maximum impact, the process is one of reduction rather than addition. Tailored, clean and restrained, his interiors encompass both the luxuries and necessities of modern living. Quality is paramount to the work and he works with a long-standing corps of artisans and craftsmen to produce finely detailed interiors. Extensive professional travel enables him to source furniture and accessories both domestically and abroad. From the contemporary to the traditional, Mr. Schnaper's approach is both intuitive and educated, resulting in elegant, timeless interiors.";

const Navigation = [
  {label: 'portfolio', destination: Pages.PORTFOLIO},
  {label: 'press', destination: Pages.PRESS},
  {label: 'about', destination: Pages.ABOUT},
  {label: 'contact', destination: Pages.CONTACT},
];

export const AboutPage = {
  src: aboutPhoto,
  txt: aboutText
};

const Configurations = {
  Navigation: Navigation,
  Pages: Pages
};

export default Configurations;
