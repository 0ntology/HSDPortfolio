// external
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import Landing   from 'components/pages/Landing.jsx';
import Home      from 'components/pages/Home.jsx';
import Portfolio from 'components/pages/Portfolio.jsx';
import About     from 'components/pages/About.jsx';
import Press     from 'components/pages/Press.jsx';

const View = () =>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
      <Route path="/press" component={Press} />
    </Switch>;

export default View;
