import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useJumpToTop } from 'Hooks';
import { Container } from 'Elements';
import About from './About';
import Contact from './Contact';
import { Portfolio, PortfolioDetail, PortfolioProvider } from './Portfolio';

interface Props {}

const Router: React.FC<Props> = () => {
  // Wenever the page changes, jump to the top of the document
  const params = useParams();
  useJumpToTop(params);

  return (
    <Page>
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>

        <Route exact path='/contact'>
          <Contact />
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
    </Page>
  );
};

export default Router;

const Page = styled(Container).attrs({ as: 'main' })``;
