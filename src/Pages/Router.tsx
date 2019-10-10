import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About';
import { Portfolio, PortfolioDetail, PortfolioProvider } from './Portfolio';

interface Props {}

const Router: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <About />
      </Route>
      <PortfolioProvider>
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
        <Route exact path='/portfolio/:projectSlug'>
          <PortfolioDetail />
        </Route>
      </PortfolioProvider>
    </Switch>
  );
};

export default Router;
