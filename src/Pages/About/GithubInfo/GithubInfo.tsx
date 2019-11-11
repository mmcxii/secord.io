import React from 'react';
import styled from 'styled-components';

import { useGithubInfo } from 'Hooks';
import { Card as C } from 'Elements';
import Display from './Display';
import Fallback from './Fallback';

interface Props {}

const GithubInfo: React.FC<Props> = () => {
  const githubInfo = useGithubInfo();

  return <Card>{githubInfo ? <Display info={githubInfo} /> : <Fallback />}</Card>;
};

export default GithubInfo;

const Card = styled(C).attrs({ as: 'section' })`
  grid-area: githubInfo;
  height: 576px;
  width: 492px;
`;
