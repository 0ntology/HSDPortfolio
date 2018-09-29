import React from  'react';
import { Route, Switch } from 'react-router-dom';

import Fonts from 'constants/Fonts.js';
import Colors from 'constants/Colors.js';
import UI from 'constants/UI.js';

import Header from 'components/header/Header.jsx';
import About     from 'components/pages/about/About.jsx';
import Archives  from 'components/pages/archives/Archives.jsx';
import Contact   from 'components/pages/contact/Contact.jsx';
import Home      from 'components/pages/home/HomeContainer.jsx';
import Landing   from 'components/pages/landing/Landing.jsx';
import Portfolio from 'components/pages/portfolio/Portfolio.jsx';

export default function App() {
  return (
    <div style={styles.base}>
      <Header/>
      <div style={styles.page}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:portKey" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/archives" component={Archives} />
        </Switch>
      </div>
    </div>
  )
}

const styles = {
  base: {
    fontFamily: Fonts.body,
    fontWeight: '400',
    backgroundColor: Colors.white,

    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
    boxSizing: 'border-box'
  },
  page: {
    overflow: 'auto',
    height: `calc(100vh - ${UI.header.height})`
  }
};
