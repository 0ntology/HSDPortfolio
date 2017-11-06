import React from 'react';

import Colors from 'constants/Colors.js';
import Keys from 'constants/Keys.js';

import Connect from 'components/common/hoc/Connected.jsx';

const Title = () =>
  <div style={styles.titleContent}>
    <div>HARRY</div>
    <div>SCHNAPER</div>
  </div>;

const Info = () =>
  <div style={styles.infoContent}>
    Info
  </div>;

const BusinessCard = () =>
  <div style={styles.businessCardBase}>
    <div style={styles.titleBase}>
      <Title />
    </div>
    <div style={styles.infoBase}>
      <Info />
    </div>
  </div>;

const Contact = ({config}) =>
  <div style={styles.base}>
    <BusinessCard />
  </div>;

export default Connect(Keys.contact)(Contact);

const styles = {
  base: {
    backgroundColor: Colors.cream,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    boxSizing: 'border-box',
    padding: '50px',

    height: '90vh',
    width: '100%'
  },
  businessCardBase: {
    height: '100%',
    width: '100%',

    padding: '16px',
    boxSizing: 'border-box',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBase: {
    flex: '1',
  },
  titleContent: {
    fontWeight: '700'
  },
  infoBase: {
    flex: '1'
  }
}
