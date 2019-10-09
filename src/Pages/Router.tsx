import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import PortfolioDetail from './PortfolioDetail';

interface Props {}

const Router: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/portfolio'>
          <Portfolio />
        </Route>
        <Route exact path='/portfolio/:project'>
          <PortfolioDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
