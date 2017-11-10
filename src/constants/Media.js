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
  {title: 'Image Three', src: 'https://photos-4.dropbox.com/t/2/AABkgwm_b_5pi5ogKhpREuazGir0W1z7VX8Ln2QJvO2aGQ/12/545924110/jpeg/32x32/1/_/1/2/IMG_5525e.jpg/EOPBs68EGM4IIAIoAg/dhlXrhX9lf0QFDYYTAnkpJqnCcmraGnenBZjWP47QZw%2CsY8cPUWs-iUTk277Z1UElFj-3X5DGUkBy83oAHRFEcU?size=2048x1536&size_mode=3'},
  {title: 'Image Four', src:'https://photos-2.dropbox.com/t/2/AADykPwkB4lhNnCp7qOQwPj1N-LqtRV4WYsFLEN5nSKz4Q/12/545924110/jpeg/32x32/1/_/1/2/04%20Wagner%20Living%20Room%20Long.jpg/EOPBs68EGM4IIAIoAg/GGXO0lpMIEBJp4AX33T6wup-_M_UWGyAQ-62GGTlcNE%2C7YW-mt___gxqVjit_NlrdOmpwuk4yBH0wMegJByVNX4%2C9lgmkYRWsWZbTYkAmG46fX4BTHOJ73jj-HLkLtrklCs%2CvS_szP0RwB94aGQ4bGucvMvPWw-43tzPbHIYjd5QPd4%2C-qH1DZk5E56tS5GboiJjcat8VCvFmlpXhzvWS-gcDeQ%2CJUmg4nU_QarJrgqlrtZ9PO0cFx3FygAhMuzmyEgAAEA%2CMwh5sBNJmLhEceDnpKjHhX6sRQnQ6jO2IY30YWYKr4Y?size=2048x1536&size_mode=3'},
  {title: 'five', src: 'https://photos-1.dropbox.com/t/2/AADMUVCfNb8ojJWhlprRg-DfmeXGXsirLu1dNkxWOKnv3w/12/545924110/jpeg/32x32/1/_/1/2/IMG_5560e.jpg/EOPBs68EGM4IIAIoAg/H7_zS0ktA7bJY1idzuCvnjssv4azdE8GCT54ygjbbr4%2C7ssIIF1dfwAgWtPG8tCVsM4wbl6LmlBjyj2FaCEopXs?size=2048x1536&size_mode=3'},
  {title: 'six', src: `https://photos-4.dropbox.com/t/2/AADvjj1PU_D4B9nxm4-c6UqziRSzxI0Td9DLkVn_L7_KHQ/12/545924110/jpeg/32x32/1/_/1/2/13%20Gorfine%20Girl's%20Room.jpg/EOPBs68EGM4IIAIoAg/uqOO01ttO0ybFQhFkYDullP__r16wEFhONjQLzbuR7g%2CgE7VcF9KA2tCrcAjBnWAKh9_XHxzZC5l5gxTheshy9A%2C5PYwV6SFMr7hK1FlIdF5KehrdMmcSWbBPVamOJuvPpk?size=2048x1536&size_mode=3`},
  {title: 'seven', src: 'https://photos-1.dropbox.com/t/2/AAAB6EDveGosiKrpAa9Gfuyv7PkRDq1K7pyKWSvsCCJVpA/12/545924110/jpeg/32x32/1/_/1/2/06%20Gorfine%20Bar.jpg/EOPBs68EGM4IIAIoAg/nG07GJpRjL6qv7bRN-kQ-uBWBaVSVLn_PMlqT3fonrs%2CJX7olq60sK0-b8QFMuerMQHnmgmgYsq5U4QJxIucW-o%2C9eOHlq_fc7R0Db3Fo1ne2CGse-TYVurbDRA-IGdtbAk?size=2048x1536&size_mode=3'},
  {title: 'eight', src: 'https://photos-5.dropbox.com/t/2/AADSERtPx3JGfWF0EkYTR_RB8U9Ib52SSouhlHArQjFkFg/12/545924110/jpeg/32x32/1/_/1/2/IMG_5589e.jpg/EOPBs68EGM4IIAIoAg/YNb2TK4bUMSJkTspQ2HrT87tSfw0XD9TECk0vdLvHTc%2Ch-Mb6tZ8HouM25A065rv9hpxqSrGPmEml4xaejAc7V4?size=2048x1536&size_mode=3'},
  {title: 'eight', src: 'https://photos-4.dropbox.com/t/2/AADwvKMeApa5RnBeYasP7ISWwHo425DaAvIA-04T_VflQA/12/545924110/jpeg/32x32/1/_/1/2/LivingRoom%20Details.JPG/EOPBs68EGM4IIAIoAg/daFE7ggINWC0pQzJRpXELdYBn8yEmFMVJDU6HSCGdv4?size=2048x1536&size_mode=3'},  
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
