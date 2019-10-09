import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header } from 'Elements';
import Router from 'Pages';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
