import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import PortfolioDetail from './PortfolioDetail';

afterEach(cleanup);

describe('<PortfolioDetail /> tests', () => {
  it('is rendering data correctly', () => {
    //* Arrange
    window.history.pushState({}, '', '/portfolio/decked-out');

    //* Act
    const { getByTestId } = render(
      <BrowserRouter>
        <Route path='/portfolio/:projectSlug'>
          <PortfolioDetail />
        </Route>
      </BrowserRouter>
    );

    //* Assert
    const projectName = getByTestId('project-title');
    const projectDesc = getByTestId('project-description');
    const projectStack = getByTestId('project-stack');
    const projectImg = getByTestId('project-screenshot');
    const siteLink = getByTestId('project-site-link');
    const repoLink = getByTestId('project-repo-link');

    //@ts-ignore
    expect(projectName.textContent.toLowerCase()).toBe('decked out');
    expect(projectDesc.children.length).toBeGreaterThanOrEqual(1);
    expect(projectStack.children.length).toBeGreaterThanOrEqual(1);
    //@ts-ignore
    expect(projectImg.getAttribute('alt').toLowerCase()).toBe('a screenshot of decked out');
    expect(siteLink.getAttribute('href')).toBe('https://deckedout.herokuapp.com/');
    expect(repoLink.getAttribute('href')).toBe('https://github.com/mmcxii/decked-out');
  });
});
