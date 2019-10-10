import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Normalize from 'react-normalize';

import { white, bgBlue, blue } from 'Utilities';
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
@import url("https://fonts.googleapis.com/css?family=Satisfy|Ubuntu+Mono&display=swap");

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

    color: ${white};
    background: ${bgBlue};
    font-size: 1.1rem;
    font-family: "Ubuntu Mono", monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Satisfy", cursive;
    color: ${blue};
    text-transform: capitalize;

    &::before {
      content: '<';
      color: ${white};
      margin-right: 0.5rem;
    }

    &::after {
      content: '>';
      color: ${white};
      margin-left: 0.5rem;
    }
  }

  h1 {
    font-size: 2.75rem;

    &::before {
      margin-right: 1rem;
    }

    &::after {
      margin-left: 1rem;
    }
  }

  h2 {
    font-size: 1.925rem;
  }

  h3 {
    font-size: 1.65rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:visited {
      color: inherit;
    }
  }

  ul, ol {
    > li {
      list-style: none;
    }
  }
`;
