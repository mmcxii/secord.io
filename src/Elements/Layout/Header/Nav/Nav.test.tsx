import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Nav from './Nav';

describe('<Nav /> tests', () => {
  it('renders a navbar', () => {
    //* Act
    const { getByTestId } = render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    );

    const navbar = getByTestId('navbar');

    expect(navbar);
  });
});
