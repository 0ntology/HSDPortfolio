import React from 'react';

import Fonts from 'constants/Fonts.js';
import Keys from 'constants/Keys.js';
import UI from 'constants/UI.js';
import Styles from 'constants/Styles.js';

import Connect from 'components/common/hoc/Connected.jsx';
import StudioMap from 'components/common/StudioMap.jsx';
import FourLineBorder from 'components/common/graphics/FourLineBorderFlex.jsx';

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

const MapDisplay = () => (
  <div style={styles.mapContainer}>
    <StudioMap isMarkerShown />
  </div>
);

const InfoDisplay = () => (
  <div style={styles.infoContainer}>
    <FourLineBorder>
      <div style={styles.infoContent}>
        <Title />
        <Address />
        <Email />
        <Phone />
      </div>
    </FourLineBorder>
  </div>
);

const Contact = ({config, ...props}) =>
  <div style={styles.container}>
    <MapDisplay />
    <InfoDisplay />
  </div>;

export default Connect(Keys.pages.contact)(Contact);

const styles = {
  container: {
    height: `calc(100vh - ${UI.header.height})`,
    boxSizing: 'border-box',

    borderWidth: '0 8px 8px 8px',
    borderStyle: 'solid',
    borderColor: 'white',

    ...Styles.flexCol
  },
  mapContainer: {
    flex: '2',
    width: '100%'
  },
  infoContainer: {
    flex: '1',
    minHeight: '200px',
    padding: '16px 8px 8px 8px',
    boxSizing: 'border-box',
  },
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
