import UI from './UI.js';
import RightArrowIcon from 'components/common/svg/RightArrowIcon.jsx';
import LeftArrowIcon from 'components/common/svg/LeftArrowIcon.jsx';

const Iconography = {
  [UI.directions.forward]: RightArrowIcon,
  [UI.directions.backward]: LeftArrowIcon,
}

export default Iconography;
