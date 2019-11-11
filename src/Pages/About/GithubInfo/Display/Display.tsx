import React from 'react';

import { green, orange } from 'Utilities';

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
  <>
    <p data-testid='github-name'>{info.name}</p>
    <p>
      <small>
        <a href={info.htmlUrl} target='blank' data-testid='github-link'>
          <i className='fab fa-github' />
          {info.login}
        </a>
      </small>
    </p>
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
  </>
);

export default Display;
