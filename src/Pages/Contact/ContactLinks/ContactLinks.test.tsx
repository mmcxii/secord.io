import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import ContactLinks from './ContactLinks';

describe('<ContactLinks /> tests', () => {
  it('has all contact info', () => {
    //* Act
    const { getByTestId } = render(
      <BrowserRouter>
        <ContactLinks />
      </BrowserRouter>
    );

    //* Assert
    const emailLink = getByTestId('link-email');
    const githubLink = getByTestId('link-github');
    const linkedinLink = getByTestId('link-linkedin');
    const twitterLink = getByTestId('link-twitter');
    const resumeLink = getByTestId('link-resume');

    expect(emailLink.getAttribute('href')).toBe('mailto:nich@secord.io');
    expect(githubLink.getAttribute('href')).toBe('https://www.github.com/mmcxii');
    expect(linkedinLink.getAttribute('href')).toBe('https://www.linkedin.com/in/nichsecord');
    expect(twitterLink.getAttribute('href')).toBe('https://www.twitter.com/nichsecord');
    expect(resumeLink.getAttribute('href')).toBe('SECORD_resume.pdf');
  });
});
