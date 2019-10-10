import React from 'react';
import { render } from '@testing-library/react';

import { SocialItemProps } from '../SocialMedia';
import SocialItem from './SocialItem';

describe('<SocialItem /> tests', () => {
  it('renders a social icon', () => {
    //* Arrange
    const testValues: SocialItemProps = {
      name: 'github',
      link: 'https://github.com/mmcxii',
      icon: 'fa-github',
    };

    //* Act
    const { getByTestId } = render(<SocialItem item={testValues} />);

    //* Assert
    const wrapper = getByTestId(`social-item--${testValues.name}`);
    const icon = getByTestId(`social-item--${testValues.name}__icon`);
    const link = getByTestId(`social-item--${testValues.name}__link`);

    expect(wrapper);
    expect(icon.getAttribute('class')).toContain(testValues.icon);
    expect(link.getAttribute('href')).toBe(testValues.link);
    expect(link.getAttribute('target')).toBe('blank');
  });
});
