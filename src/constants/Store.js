import { keyBy, map, pick, values } from 'lodash';
import { defaultKeyHandler } from 'utils/Utils.js';

import Keys from 'constants/Keys.js';
import Media from 'constants/Media.js';
import Text from 'constants/Text.js';
import Routes from 'constants/Routes.js';
import UI from 'constants/UI.js';
import Types from 'constants/Types.js';

const Store = {
  [Keys.components.navigation]: Types.Nav(map(Keys.destinations, key => Types.Link(Text[key], Routes[key]))),
  [Keys.pages.home]: Types.Page(values(pick(Media, Keys.feeds[Keys.pages.home]))),
  [Keys.pages.about]: Types.Page(values(pick(Media, Keys.feeds[Keys.pages.about])), false, Text.testament),
  [Keys.pages.contact]: Types.Page(),
  [Keys.pages.landing]: Types.Page(Media[Keys.pages.landing]),
  [Keys.pages.archives]: Types.Page(map(Keys.archives, key => Types.Archive(
    Text[key].label,
    Text[key].date,
    Media[key],
    Routes[key]
  ))),
  [Keys.pages.portfolio]: new Proxy(
    keyBy(
      map(
        Keys.portfolio,
        containerKey => ({
          key: containerKey,
          items: map(Keys.feeds[containerKey],
            (key, index) => Types.Project(
              Text[key],
              Media[key],
              UI.getBoxType(containerKey, index),
              Routes[key],
          ))
        })
      ),
      'key'
    ),
    defaultKeyHandler(Keys.portfolio.directory)
  ),
};

export default Store;
