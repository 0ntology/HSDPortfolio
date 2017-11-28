import Keys from 'constants/Keys.js';

const boxTypes = {
  link: 'link',
  img: 'img',
  hoverlink: 'hoverlink'
};

const UI = {
  screens: {
    small: {
      width: 500,
      columns: 1
    },
    medium: {
      width: 1000,
      columns: 2
    },
    large: {
      width: 1500,
      columns: 3
    },
  },
  directions: {
    forward: 1,
    backward: -1
  },
  header: {
    height: '70px'
  },
  boxTypes: boxTypes,
  getBoxType: (containerKey, index) => {
    switch(containerKey) {
      case Keys.portfolio.directory:
        return boxTypes.hoverlink;
      default:
        return index ? boxTypes.img : boxTypes.link;
    }
  }
};

export default UI;
