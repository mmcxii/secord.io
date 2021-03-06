import React from 'react';
import { render, getNodeText } from '@testing-library/react';

import Languages from './Languages';

describe('<Languages /> tests', () => {
  it('renders data correctly', () => {
    //* Arrange
    const testID = 1234;
    const testValues: {} = {
      TypeScript: 5000,
      JavaScript: 7373,
      HTML: 33,
    };

    //* Act
    const { getByTestId } = render(<Languages langs={testValues} testID={testID} />);

    const lastLang = getByTestId(`recent-project--${testID}__lang-2--percentage`);

    //* Assert
    expect(getNodeText(lastLang)).toBe('0.3%');
  });
});
