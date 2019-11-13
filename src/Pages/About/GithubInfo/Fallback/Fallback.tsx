import React from 'react';
import styled from 'styled-components';

import { bgBlue, transition, spacing } from 'Utilities';
import { Card as C } from 'Elements';

interface Props {}

const Fallback: React.FC<Props> = () => (
  <Card>
    <GithubIcon className='fab fa-github' />
    <p>Loading...</p>
  </Card>
);

export default Fallback;

const Card = styled(C).attrs({ as: 'section' })`
  grid-area: githubInfo;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 511px;
  ${transition({})}
`;

const GithubIcon = styled.i`
  color: ${bgBlue};
  font-size: 10rem;
  margin-bottom: ${spacing.sm};
`;
