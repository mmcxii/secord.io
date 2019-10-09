import React from 'react';
import { render } from '@testing-library/react';

import Nav from './Nav';

describe('<Nav /> tests', () => {
  it('renders a navbar', () => {
    //* Act
    const { getByTestId } = render(<Nav />);

    const navbar = getByTestId('navbar');

    expect(navbar.children.length).toBe(3);
  });
});
