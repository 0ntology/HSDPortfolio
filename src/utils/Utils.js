import { screens } from 'constants/UI.js';
import { screenKeys } from 'constants/Keys.js';

export default class Utils {
  static calcScreen(width) {
    return ((width < screens.small.width) && screenKeys.small)
      || ((width < screens.medium.width) && screenKeys.medium)
      || screenKeys.large;
  }

  static calcCols(width) {
    const screenKey = Utils.calcScreen(width);
    return screens[screenKey].columns;
  }

}

export const chunkColumns = (n) => (items) => {
  let chunks = Array(n);

  items.forEach((el, i) => {
    chunks[i % n]
      ? chunks[i % n].push(el)
      : chunks[i % n] = [el];
  });

  return chunks;
}

export const defaultKeyHandler = key => ({
  get: (target, name) => target[`${name in target ? name : key}`]
});
