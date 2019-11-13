import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe('<Display /> tests', () => {
  it('is rendering data correctly', () => {
    //* Arrange
    const testValues = {
      avatarUrl: 'https://avatars3.githubusercontent.com/u/43550567?v=4',
      bio: 'https://www.linkedin.com/in/nichsecord/',
      hireable: true,
      htmlUrl: 'https://github.com/mmcxii',
      location: 'Redmond, WA',
      login: 'mmcxii',
      name: 'Nich Secord',
    };

    //* Act
    const { getByTestId } = render(<Display info={testValues} />);

    //* Assert
    const name = getByTestId('github-name');
    const link = getByTestId('github-link');
    const bio = getByTestId('github-bio');
    const hireable = getByTestId('github-hireable');
    const hireableIcon = getByTestId('github-hireable-icon');
    const picture = getByTestId('github-picture');
    const disclaimer = getByTestId('github-disclaimer');

    expect(name.textContent).toBe(testValues.name);
    expect(link.getAttribute('href')).toBe(testValues.htmlUrl);
    expect(bio.textContent).toBe(testValues.bio);
    expect(hireable.textContent).toBe(' I am currently looking for work!');
    expect(hireableIcon.classList[hireableIcon.classList.length - 1]).toBe('fa-check-circle');
    expect(picture.getAttribute('src')).toBe(testValues.avatarUrl);
    expect(picture.getAttribute('alt')).toBe(testValues.name);
    expect(disclaimer.textContent).toBe('Infomation pulled in dynamically from Github');
  });
});
