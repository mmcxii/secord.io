import React from 'react';
import { render } from '@testing-library/react';

import SocialMedia from './SocialMedia';

describe('<SocialMedia /> tests', () => {
  it('renders links to each social media', () => {
    //* Arrange

    //* Act
    const { getByTestId } = render(<SocialMedia />);

    //* Assert
    const wrapper = getByTestId('social-media');

    expect(wrapper.children.length).toBe(3);
  });
});
