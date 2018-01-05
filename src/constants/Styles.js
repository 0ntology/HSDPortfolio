import Colors from 'constants/Colors.js';
import Fonts from 'constants/Fonts.js';

const Styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexItem: {
    flex: 1,
    height: '100%',
    margin: '0px 4px',
  },
  flexBottom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
  },
  flexStart: {
    display: 'flex',
    justifyContent: 'start',
    paddingLeft: '16px'
  },
  link: {
    textDecoration: 'none',
    color: Colors.black,
    cursor: 'pointer'
  },
  text: {
    fontFamily: Fonts.plain
  },
};

export default Styles;
