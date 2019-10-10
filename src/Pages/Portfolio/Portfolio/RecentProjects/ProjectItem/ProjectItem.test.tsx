import React from 'react';
import { render, getNodeText } from '@testing-library/react';

import ProjectItem from './ProjectItem';
import { RecentProjectItemProps } from '../RecentProjects';

describe('<ProjectItem /> tests', () => {
  it('is rendering data correctly', () => {
    //* Arrange
    const testID = 123456;
    const testValues: RecentProjectItemProps = {
      id: 123456,
      name: 'test project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      updatedAt: Date.now().toString(),
      homepage: 'http://www.mmcxii.github.io/test-project',
      htmlUrl: 'http://github.com/mmcxii/test-project',
      langs: { Typescript: 3000, html: 150 },
    };

    //* Act
    const { getByTestId } = render(<ProjectItem testID={testID} project={testValues} />);

    const itemWrapper = getByTestId(`recent-project--${testID}`);
    const langItem = getByTestId(`recent-project--${testID}__lang-0`);
    const repoLink = getByTestId(`recent-project--${testID}__repo-link`);

    //* Assert
    expect(itemWrapper);
    expect(getNodeText(langItem)).toBe('Typescript');
    expect(repoLink.getAttribute('href')).toBe(testValues.htmlUrl);
  });
});
