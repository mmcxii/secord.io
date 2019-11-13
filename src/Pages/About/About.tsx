import React from 'react';
import styled from 'styled-components';

import GithubInfo from './GithubInfo';
import Bio from './Bio';
import { Card } from 'Elements';
import { spacing } from 'Utilities';

interface Props {}

const About: React.FC<Props> = () => (
  <Wrapper>
    <Title>About Me</Title>
    <GithubInfo />
    <Bio />
  </Wrapper>
);

export default About;

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(2, max-content) 1fr;
  grid-template-areas:
    'title'
    'githubInfo'
    'bio';
  grid-gap: ${spacing.md};

  @media screen and (min-width: 992px) {
    grid-template-rows: max-content 1fr;
    grid-template-columns: max-content 1fr;
    grid-template-areas:
      'title title'
      'githubInfo bio';
  }
`;

const Title = styled.h2`
  grid-area: title;
`;
