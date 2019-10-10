import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Normalize from 'react-normalize';

import { Header, Footer } from 'Elements';
import Router from 'Pages';

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />

      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  *,*::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;
