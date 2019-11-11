import React from 'react';
import { render, getNodeText } from '@testing-library/react';

import UpdatedAt from './UpdatedAt';

describe('<UpdatedAt /> tests', () => {
  it('formats datestrings correctly', () => {
    //* Arrange
    const testValue: string = '2019-11-08T02:38:52Z';

    //* Act
    const { getByTestId } = render(<UpdatedAt updatedAt={testValue} />);

    const formattedDate = getByTestId('updated-at');

    //* Assert
    expect(getNodeText(formattedDate)).toBe('Last Updated: Thursday, Nov 7, 2019');
  });
});
