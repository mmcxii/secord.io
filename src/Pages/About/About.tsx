import React from 'react';
import styled from 'styled-components';

import GithubInfo from './GithubInfo';
import { Card } from 'Elements';
import { spacing } from 'Utilities';

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <GithubInfo />
      <Bio>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis modi, dolor numquam totam dolore
        consequatur tempore, illo velit eveniet, laborum et earum ea maiores nulla omnis repellat perspiciatis!
        Reiciendis, sint?
      </Bio>
    </Wrapper>
  );
};

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

const Bio = styled(Card)`
  grid-area: bio;
  max-width: calc(400px + (${spacing.md} * 2) + ${spacing.sm});
  justify-self: center;

  @media screen and (min-width: 992px) {
    max-width: initial;
  }
`;
