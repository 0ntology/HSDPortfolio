import React from 'react';
import Radium from 'radium';

import Fonts from 'constants/Fonts.js';
import Keys from 'constants/Keys.js';
import UI from 'constants/UI.js';
import Styles from 'constants/Styles.js';

import Dimensioned from 'components/common/hoc/Dimensioned.jsx';
import Connect from 'components/common/hoc/Connected.jsx';

import BorderBox from 'components/common/box/BorderBox.jsx';

import ContactMap from './ContactMap.jsx';

const Title = () =>
  <span style={styles.title}>
    { ` harry schnaper` }
  </span>;

const Address = () =>
  <span style={styles.address}>
    { `692 Madison Ave # 5, New York, NY 10065` }
  </span>;

const Email = () =>
  <span style={styles.email}>
    { `info@harryschnaper.com` }
  </span>;

const Phone = () =>
  <span style={styles.phone}>
    { `(212) 980-9898` }
  </span>;

const MapDisplay = ({ numCols }) => (
  <BorderBox customStyle={styles.mapContainer(numCols)}>
    <div style={styles.mapContent}>
      <ContactMap isMarkerShown />
    </div>
  </BorderBox>
);

const InfoDisplay = ({ numCols }) => (
  <div style={styles.infoContainer(numCols)}>
    <BorderBox>
      <div style={styles.infoContent}>
        <Title />
        <Address />
        <Email />
        <Phone />
      </div>
    </BorderBox>
  </div>
);

const Contact = ({
  config,
  dimensions: { columns },
  ...props
}) => (
  <div style={styles.container}>
    <MapDisplay numCols={columns} />
    <InfoDisplay numCols={columns} />
  </div>
);

export default Connect(Keys.pages.contact)(Radium(Dimensioned(Contact)));

const styles = {
  container: {
    height: `calc(100vh - ${UI.header.height})`,
    boxSizing: 'border-box',

    borderWidth: '0 8px 8px 8px',
    borderStyle: 'solid',
    borderColor: 'white',

    ...Styles.flexCol
  },
  mapContainer: (numCols) => ({
    height: `calc((100vh - ${UI.header.height}) * 2 / 3)`,
    width: `${100 / numCols}%`,
  }),
  mapContent: {
    height: '100%'
  },
  infoContainer: (numCols) => ({
    height: `calc((100vh - ${UI.header.height}) * 1 / 3)`,
    width: `${100 / numCols}%`,
    padding: '16px 0px 8px 0px',
    boxSizing: 'border-box',
  }),
  infoContent: {
    height: '100%',
    padding: '16px',
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    display: 'inline-block',
    marginLeft: '15px',
    fontFamily: Fonts.body,
    fontSize: '20pt',
    letterSpacing: '15px',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  address: {
    fontSize: '14pt'
  },
  email: {
    fontSize: '14pt'
  },
  phone: {
    fontSize: '14pt'
  }
}
