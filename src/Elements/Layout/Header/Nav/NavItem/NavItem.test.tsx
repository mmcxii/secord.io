import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { NavItemProps } from '../Nav';
import NavItem from './NavItem';

describe('<NavItem /> tests', () => {
  it('renders data correctly', () => {
    //* Arrange
    const testValues: NavItemProps = {
      page: 'portfolio',
      link: '/portfolio',
      icon: 'fa-browser',
    };

    //* Act
    const { getByTestId } = render(
      <BrowserRouter>
        <NavItem item={testValues} />
      </BrowserRouter>
    );

    //* Assert
    const itemWrapper = getByTestId(`${testValues.page}-wrapper`);
    const itemLink = getByTestId(`${testValues.page}-link`);
    const itemIcon = getByTestId(`${testValues.page}-icon`);
    const itemText = getByTestId(`${testValues.page}-text`);

    expect(itemWrapper);
    expect(itemLink.getAttribute('href')).toBe(testValues.link);
    expect(itemIcon.getAttribute('class')).toBe(`fas ${testValues.icon}`);
    expect(itemText.textContent.toLowerCase()).toBe(testValues.page);
  });
});
