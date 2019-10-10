import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, Footer } from 'Elements';
import Router from 'Pages';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
