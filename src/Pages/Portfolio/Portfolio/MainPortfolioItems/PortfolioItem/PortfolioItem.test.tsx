import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText } from '@testing-library/react';

import PorftolioItem from './PortfolioItem';
import { PortfolioItemProps } from '../MainPortfolioItems';

describe('<PorftolioItem /> tests', () => {
  it('is rendering data correctly', () => {
    //* Arrange
    const testID: number = 123456;
    const testValues: PortfolioItemProps = {
      name: 'test project',
      slug: 'test-project',
      github: 'http://github.com/mmcxii/test-project',
      site: 'http://www.mmcxii.github.io/test-project',
      imgSrc: 'placeholder',
      techStackIcons: ['placeholder', 'values'],
      desc: ['placeholder', 'values'],
    };

    //* Act
    const { getByTestId } = render(
      <BrowserRouter>
        <PorftolioItem project={testValues} testID={testID} />
      </BrowserRouter>
    );

    //* Assert
    const projectWrapper = getByTestId(`portfolio-item--${testID}`);
    const siteLink = getByTestId(`portfolio-item--${testID}__site-link`);
    const repoLink = getByTestId(`portfolio-item--${testID}__repo-link`);
    const detailLink = getByTestId(`portfolio-item--${testID}__detail-link`);

    expect(projectWrapper);
    expect(getNodeText(siteLink)).toBe(testValues.name);
    expect(siteLink.getAttribute('href')).toBe(testValues.site);
    expect(repoLink.getAttribute('href')).toBe(testValues.github);
    expect(detailLink.getAttribute('href')).toBe(`/portfolio/${testValues.slug}`);
  });
});
