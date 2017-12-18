// external
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import About     from 'components/pages/about/About.jsx';
import Archives  from 'components/pages/archives/Archives.jsx';
import Contact   from 'components/pages/contact/Contact.jsx';
import Home      from 'components/pages/home/Home.jsx';
import Landing   from 'components/pages/landing/Landing.jsx';
import Portfolio from 'components/pages/portfolio/Portfolio.jsx';

const View = () =>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:portKey" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/archives" component={Archives} />
    </Switch>;

export default View;
