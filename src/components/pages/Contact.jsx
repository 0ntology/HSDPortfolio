import React from 'react';

import Colors from 'constants/Colors.js';
import { Header } from 'constants/UI.js';
import Keys from 'constants/Keys.js';
import { flexCol } from 'constants/Styles.js';

import Connect from 'components/common/hoc/Connected.jsx';
import StudioMap from 'components/common/StudioMap.jsx';

const Title = () => <div style={styles.title}>{ `H A R R Y S C H N A P E R` }</div>;
const Address = () => <div style={styles.address}>{ `692 Madison Ave # 5, New York, NY 10065` }</div>;
const Email = () => <div style={styles.email}>{ `harry@harryschnaper.com` }</div>;
const Phone = () => <div style={styles.phone}>{ `(212) 980-9898` }</div>;

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

  },
  address: {

  },
  email: {

  },
  phone: {

  }
}
