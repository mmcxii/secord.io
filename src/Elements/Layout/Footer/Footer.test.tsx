import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('<Footer /> tests', () => {
  it('renders correctly', () => {
    //* Act
    const { getByTestId } = render(<Footer />);

    //* Assert
    const wrapper = getByTestId('footer-wrapper');
    const byline = getByTestId('byline');
    const socialMedia = getByTestId('social-media');

    expect(wrapper.children.length).toBe(2);
    expect(byline);
    expect(socialMedia);
  });
});
