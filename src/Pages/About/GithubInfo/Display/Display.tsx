import React from 'react';
import styled from 'styled-components';

import { green, orange, roundedInner, spacing, transition, blue } from 'Utilities';
import { Card as C } from 'Elements';

interface IGithubInfo {
  avatarUrl: string;
  bio: string;
  hireable: boolean;
  htmlUrl: string;
  location: string;
  login: string;
  name: string;
}

interface Props {
  info: IGithubInfo;
}

const Display: React.FC<Props> = ({ info }) => (
  <Card>
    <Name data-testid='github-name'>{info.name}</Name>
    <Username>
      <a href={info.htmlUrl} target='blank' data-testid='github-link'>
        <GithubIcon className='fab fa-github' />
        {info.login}
      </a>
    </Username>
    <Bio data-testid='github-bio'>{info.bio}</Bio>
    <Hireable data-testid='github-hireable'>
      <HireableIcon
        className={`fas ${info.hireable ? 'fa-check-circle' : 'fa-times-circle'}`}
        hireable={info.hireable}
        data-testid='github-hireable-icon'
      />{' '}
      I am currently
      {!info.hireable && 'not'} looking for work{info.hireable ? '!' : '.'}
    </Hireable>
    <ProfilePic src={info.avatarUrl} alt={info.name} data-testid='github-picture' />
  </Card>
);

export default Display;

const Card = styled(C).attrs({ as: 'section' })`
  grid-area: githubInfo;

  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: repeat(4, max-content);
  grid-template-areas:
  'name . username'
  'pic pic pic'
  'hireable hireable hireable'
  'bio bio bio';
  grid-gap: ${spacing.sm};
  align-items: center;
`;

const Name = styled.p`
grid-area: name;

  font-size: 1.3rem;
`;

const Username = styled.small`
grid-area: username;

  font-size: 0.9rem;

  > a {
    ${transition({ prop: 'color' })};
    
    &:hover {
      color: ${blue};
    }
  }
`;

const GithubIcon = styled.i`
  margin-right: ${spacing.xs};
`;

const Bio = styled.p`
  grid-area: bio;
`;

const Hireable = styled.p`
  grid-area: hireable;
`;

const HireableIcon = styled.i<{ hireable: boolean; }>`
  color: ${props => props.hireable ? green : orange};
`;

const ProfilePic = styled.img`
  grid-area: pic;

  border-radius: ${roundedInner}
`;
