import { screens } from 'constants/UI.js';
import { screenKeys } from 'constants/Keys.js';

export default class StyleUtils {
  static calcScreen(width) {
    return ((width < screens.small.width) && screenKeys.small)
      || ((width < screens.medium.width) && screenKeys.medium)
      || screenKeys.large;
  }

  static calcCols(width) {
    const screenKey = StyleUtils.calcScreen(width);
    return screens[screenKey].columns;
  }
}
