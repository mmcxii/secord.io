import React from 'react';
import styled from 'styled-components';

import GithubInfo from './GithubInfo';

interface IGithubInfo {
  avatarUrl: string;
  bio: string;
  hireable: boolean;
  htmlUrl: string;
  location: string;
  login: string;
  name: string;
}

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Title>About Me</Title>
      <GithubInfo />
      <Bio>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis modi, dolor numquam totam dolore
        consequatur tempore, illo velit eveniet, laborum et earum ea maiores nulla omnis repellat
        perspiciatis! Reiciendis, sint?
      </Bio>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: max-content 1fr;
  grid-template-areas:
    'title title'
    'githubInfo bio';
`;

const Title = styled.h2`
  grid-area: title;
`;

const Bio = styled.p`
  grid-area: bio;
`;
