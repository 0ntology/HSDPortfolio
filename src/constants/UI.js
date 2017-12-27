import Keys from 'constants/Keys.js';

const boxTypes = {
  link: 'link',
  img: 'img',
  hoverlink: 'hoverlink',
  icon: 'icon'
};

const UI = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    end: "touchend",
    swipeThreshold: 25
  },
  spacing: 8,
  screens: {
    small: {
      width: 615,
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
    backward: 'backward',
    forward: 'forward',
  },
  header: {
    height: '70px'
  },
  boxTypes: boxTypes,
  getBoxType: (containerKey, index) => {
    return containerKey === Keys.portfolio.directory
            ? boxTypes.hoverlink
            : boxTypes.img;
  }
};

export default UI;
