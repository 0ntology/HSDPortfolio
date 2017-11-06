import Keys from 'constants/Keys.js';

import leftArrowIcon from 'constants/assets/iconography/left_arrow.svg';
import rightArrowIcon from 'constants/assets/iconography/right_arrow.svg';
import aboutPhotoSrc from 'constants/assets/img/hsd-about.jpg';
import Press1 from 'constants/assets/img/press1.jpg';
import Press2 from 'constants/assets/img/press2.jpg';
import Press3 from 'constants/assets/img/press3.jpg';

// iconography
export const LeftArrow = leftArrowIcon;
export const RightArrow = rightArrowIcon;

// pages
export const aboutMedia = [
  {title: 'about', src: aboutPhotoSrc}
];

export const portfolioMedia = [
  {title: 'Image One', src: 'https://photos-6.dropbox.com/t/2/AADy0P6CTQYkwqFYDaqQG7DjFkGRlI36dEw1lY_Pf4D2oA/12/545924110/jpeg/32x32/1/_/1/2/02%20Gorfine%20Living%20Room.jpg/EOPBs68EGM4IIAIoAg/sHZk1k63gLqfiyyIplAcPM32CtpCTFzLFFw5LjLpty4%2CyRrhGvKDSB63M7Is4V8ykFwiHfvkPBH0Md69Ktf_-J4%2CQzrf7AGPq_RaDiZJxUrsJZ07BDfIVLKQa7AIFdVSeuk%2CQKBDWI0j7cBZcitAeMq9lVvSheZgEXZZlB121heH_VQ?size=2048x1536&size_mode=3'},
  {title: 'Image Two', src: 'https://photos-3.dropbox.com/t/2/AACNsRQ9ywLH69WaH7zjSlnH6csxuGAPhGdlWJOASnDP5w/12/545924110/jpeg/32x32/1/_/1/2/09%20Gorfine%20Kitchen%20To%20Bar.jpg/EOPBs68EGM4IIAIoAg/XFkumEHgI-JCGb9vcKGGTlFGroc53JZXu1aK3t5YSMM%2CTiypUPDSXnc-i2Hhdp-2qJ_ULVDJ9IzNJUnR1NK9uPE%2CRa_Seg48jh1KZW0IkvXAXV3Z2RzbqZIW1FPJrytNL_M?size=2048x1536&size_mode=3'},
  {title: 'Image Three', src: 'https://photos-4.dropbox.com/t/2/AABkgwm_b_5pi5ogKhpREuazGir0W1z7VX8Ln2QJvO2aGQ/12/545924110/jpeg/32x32/1/_/1/2/IMG_5525e.jpg/EOPBs68EGM4IIAIoAg/dhlXrhX9lf0QFDYYTAnkpJqnCcmraGnenBZjWP47QZw%2CsY8cPUWs-iUTk277Z1UElFj-3X5DGUkBy83oAHRFEcU?size=2048x1536&size_mode=3'}
];

export const pressMedia = [
  {src: Press1, txt: 'At Home - Architectural Digest', link: 'https://www.architecturaldigest.com/story/schnaper-article-092002'},
  {src: Press2, txt: 'Philadelphia Freedom - Architectural Digest', link: 'https://www.architecturaldigest.com/story/schnaper-article-022003'},
  {src: Press3, txt: 'Featured - Architectural Digest', link: 'https://www.architecturaldigest.com/story/harry-schnaper-profile'},
];

export const homeMedia = [
  {title: 'Image One', src: 'https://photos-6.dropbox.com/t/2/AADy0P6CTQYkwqFYDaqQG7DjFkGRlI36dEw1lY_Pf4D2oA/12/545924110/jpeg/32x32/1/_/1/2/02%20Gorfine%20Living%20Room.jpg/EOPBs68EGM4IIAIoAg/sHZk1k63gLqfiyyIplAcPM32CtpCTFzLFFw5LjLpty4%2CyRrhGvKDSB63M7Is4V8ykFwiHfvkPBH0Md69Ktf_-J4%2CQzrf7AGPq_RaDiZJxUrsJZ07BDfIVLKQa7AIFdVSeuk%2CQKBDWI0j7cBZcitAeMq9lVvSheZgEXZZlB121heH_VQ?size=2048x1536&size_mode=3'},
  {title: 'Image Two', src: 'https://photos-3.dropbox.com/t/2/AACNsRQ9ywLH69WaH7zjSlnH6csxuGAPhGdlWJOASnDP5w/12/545924110/jpeg/32x32/1/_/1/2/09%20Gorfine%20Kitchen%20To%20Bar.jpg/EOPBs68EGM4IIAIoAg/XFkumEHgI-JCGb9vcKGGTlFGroc53JZXu1aK3t5YSMM%2CTiypUPDSXnc-i2Hhdp-2qJ_ULVDJ9IzNJUnR1NK9uPE%2CRa_Seg48jh1KZW0IkvXAXV3Z2RzbqZIW1FPJrytNL_M?size=2048x1536&size_mode=3'},
  {title: 'Image Three', src: 'https://photos-4.dropbox.com/t/2/AABkgwm_b_5pi5ogKhpREuazGir0W1z7VX8Ln2QJvO2aGQ/12/545924110/jpeg/32x32/1/_/1/2/IMG_5525e.jpg/EOPBs68EGM4IIAIoAg/dhlXrhX9lf0QFDYYTAnkpJqnCcmraGnenBZjWP47QZw%2CsY8cPUWs-iUTk277Z1UElFj-3X5DGUkBy83oAHRFEcU?size=2048x1536&size_mode=3'}
];

export const contactMedia = [
  {title: 'Harry Schnaper', src: aboutPhotoSrc},
  {title: 'Elise Casey', src: aboutPhotoSrc}
];

export const landingMedia = [
  {title: 'Image Two', src: 'https://photos-3.dropbox.com/t/2/AACNsRQ9ywLH69WaH7zjSlnH6csxuGAPhGdlWJOASnDP5w/12/545924110/jpeg/32x32/1/_/1/2/09%20Gorfine%20Kitchen%20To%20Bar.jpg/EOPBs68EGM4IIAIoAg/XFkumEHgI-JCGb9vcKGGTlFGroc53JZXu1aK3t5YSMM%2CTiypUPDSXnc-i2Hhdp-2qJ_ULVDJ9IzNJUnR1NK9uPE%2CRa_Seg48jh1KZW0IkvXAXV3Z2RzbqZIW1FPJrytNL_M?size=2048x1536&size_mode=3'},
];

const Media = {
  [Keys.about]: aboutMedia,
  [Keys.home]: homeMedia,
  [Keys.contact]: contactMedia,
  [Keys.landing]: landingMedia,
  [Keys.portfolio]: portfolioMedia,
};

export default Media;
