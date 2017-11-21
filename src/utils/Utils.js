import { chunk, ceil, values } from 'lodash';
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

export const chunkColumns = (columns) => (media) => chunk(
  media,
  ceil(media.length / columns)
);

export const defaultKeyHandler = key => ({
  get: (target, name) => target[`${name in target ? name : key}`]
});
