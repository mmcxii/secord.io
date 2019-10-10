import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PortfolioProvider } from './Portfolio';
import { Portfolio, PortfolioDetail } from './Portfolio';

interface Props {}

const Router: React.FC<Props> = () => {
  return (
    <Switch>
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
