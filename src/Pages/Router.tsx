import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PortfolioProvider } from './Portfolio';
import { Portfolio, PortfolioDetail } from './Portfolio';

interface Props {}

const Router: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PortfolioProvider>
          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/portfolio/:project'>
            <PortfolioDetail />
          </Route>
        </PortfolioProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
