import Keys, { portKeys } from 'constants/Keys.js';

import leftArrowIcon from 'constants/assets/iconography/left_arrow.svg';
import rightArrowIcon from 'constants/assets/iconography/right_arrow.svg';
import aboutPhotoSrc from 'constants/assets/img/hsd-about.jpg';


// iconography
export const LeftArrow = leftArrowIcon;
export const RightArrow = rightArrowIcon;

// pages
export const aboutMedia = [
  {title: 'about', src: aboutPhotoSrc}
];

export const homeMedia = [
  {title: 'five', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450477/schnaper-9_cdtnjz.jpg'},
  {title: 'nine', src: 'https://res.cloudinary.com/enclave/image/upload/v1510451196/schnaper-8_tpgt3z.jpg'},
  {title: 'six', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450485/schnaper-10_bseffw.jpg'},
  {title: 'seven', src: 'https://res.cloudinary.com/enclave/image/upload/v1510451190/schnaper-7_gol917.jpg'},
  {title: 'Image Two', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450435/schnaper-4_hv1pfe.jpg'},
];

export const contactMedia = [
  {title: 'Harry Schnaper', src: aboutPhotoSrc},
  {title: 'Elise Casey', src: aboutPhotoSrc}
];

export const landingMedia = [
  {title: 'six', src: 'https://res.cloudinary.com/enclave/image/upload/v1510450485/schnaper-10_bseffw.jpg'},
];

// portfolio
const portfolioMedia = {
  [portKeys.upperEastSide] : {
    cover: 'https://res.cloudinary.com/enclave/image/upload/v1510450363/schnaper-1_xjquc9.jpg',
    feed: homeMedia,
  },
  [portKeys.fifthAvenue] : {
    cover: 'https://res.cloudinary.com/enclave/image/upload/v1510450363/schnaper-1_xjquc9.jpg',
    feed: homeMedia,
  },
  [portKeys.eightySeventhStreet] : {
    cover: 'https://res.cloudinary.com/enclave/image/upload/v1510450363/schnaper-1_xjquc9.jpg',
    feed: homeMedia,
  },
  [portKeys.newYork] : {
    cover: 'https://res.cloudinary.com/enclave/image/upload/v1510450363/schnaper-1_xjquc9.jpg',
    feed: homeMedia,
  },
  [portKeys.madisonAvenue] : {
    cover: 'https://res.cloudinary.com/enclave/image/upload/v1510450363/schnaper-1_xjquc9.jpg',
    feed: homeMedia,
  },
  [portKeys.hamptonBays] : {
    cover: 'https://res.cloudinary.com/enclave/image/upload/v1510450363/schnaper-1_xjquc9.jpg',
    feed: homeMedia,
  },
  [portKeys.kidsBedrooms] : {
    cover: 'https://res.cloudinary.com/enclave/image/upload/v1510450363/schnaper-1_xjquc9.jpg',
    feed: homeMedia,
  },
};

// archives
const archives = {
  [Keys.archives.architecturalDigest1]: '',
  [Keys.archives.architecturalDigest2]: '',
  [Keys.archives.architecturalDigest3]: '',
}

const Media = {
  [Keys.pages.about]: aboutMedia,
  [Keys.pages.home]: homeMedia,
  [Keys.pages.contact]: contactMedia,
  [Keys.pages.landing]: landingMedia,
  [Keys.pages.portfolio]: portfolioMedia,
  [Keys.pages.archives]: archives
};

export default Media;
