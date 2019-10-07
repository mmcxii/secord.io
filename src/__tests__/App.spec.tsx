import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> tests', () => {
  it('renders', () => {
    const { getByTestId, getByText } = render(<App />);

    expect(getByText('testing everything'));
    expect(getByTestId('canary'));
  });
});
