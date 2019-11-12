import React from 'react';
import styled from 'styled-components';

import { green, orange } from 'Utilities';
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
    <p data-testid='github-name'>{info.name}</p>
    <small>
      <a href={info.htmlUrl} target='blank' data-testid='github-link'>
        <i className='fab fa-github' />
        {info.login}
      </a>
    </small>
    <p data-testid='github-bio'>{info.bio}</p>
    <p data-testid='github-hireable'>
      <i
        className={`fas ${info.hireable ? 'fa-check-circle' : 'fa-times-circle'}`}
        style={{ color: info.hireable ? green : orange }}
        data-testid='github-hireable-icon'
      />{' '}
      I am currently
      {!info.hireable && 'not'} looking for work{info.hireable ? '!' : '.'}
    </p>
    <img src={info.avatarUrl} alt={info.name} data-testid='github-picture' />
  </Card>
);

export default Display;

const Card = styled(C).attrs({ as: 'section' })`
  grid-area: githubInfo;

  display: grid;
`;

const Name = styled.p``;

const Login = styled.small``;

const Bio = styled.p``;

const Hireable = styled.p``;

const HireableIcon = styled.i``;

const ProfilePic = styled.img``;