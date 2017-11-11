import Colors from 'constants/Colors.js';
import Fonts from 'constants/Fonts.js';

export const flexRow = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const flexCol = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const flexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const flexItem = {
  flex: 1,
  height: '100%',
  margin: '0px 4px 0px 4px',
}

export const flexBottom = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
}

export const flexStart = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  paddingLeft: '16px'
}

export const link = {
  textDecoration: 'none',
  color: Colors.black,
}

export const text = {
  fontFamily: Fonts.plain
}
