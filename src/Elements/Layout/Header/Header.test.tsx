import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Header from './Header';

describe('<Header /> tests', () => {
  it('renders correctly', () => {
    //* Act
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    //* Assert
    const headerWrapper = getByTestId('header-wrapper');
    const logo = getByTestId('main-logo');

    expect(headerWrapper.children.length).toBe(2);
    expect(logo.textContent.toLowerCase()).toBe('nich secord');
    expect(logo.firstElementChild.getAttribute('href')).toBe('/');
  });
});
