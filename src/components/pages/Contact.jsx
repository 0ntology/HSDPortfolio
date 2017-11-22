import React from 'react';

import Fonts from 'constants/Fonts.js';
import Keys from 'constants/Keys.js';
import { Header } from 'constants/UI.js';
import { flexCol } from 'constants/Styles.js';

import Connect from 'components/common/hoc/Connected.jsx';
import StudioMap from 'components/common/StudioMap.jsx';

const Title = () =>
  <span style={styles.title}>
    { `harry schnaper` }
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

const Contact = ({config, ...props}) =>
  <div style={styles.container}>
    <div style={styles.mapContainer}>
      <StudioMap isMarkerShown />
    </div>
    <div style={styles.infoContainer}>
      <Title />
      <Address />
      <Email />
      <Phone />
    </div>
  </div>;

export default Connect(Keys.contact)(Contact);

const styles = {
  container: {
    height: `calc(100vh - ${Header.height})`,
    width: '100vw',
    ...flexCol
  },
  mapContainer: {
    flex: '2',
    width: '100%'
  },
  infoContainer: {
    flex: '1',
    minHeight: '200px',
    padding: '4px 4px 16px 4px',
    boxSizing: 'border-box',
    ...flexCol
  },
  title: {
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
