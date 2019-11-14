import React from 'react';
import styled from 'styled-components';

import { Card as C } from 'Elements';
import { bgBlue, spacing } from 'Utilities';

interface Props {}

const Fallback: React.FC<Props> = () => (
  <Card>
    <GithubIcon className='fab fa-github' />
    <p>loading...</p>
  </Card>
);

export default Fallback;

const Card = styled(C)`
  min-height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GithubIcon = styled.i`
  color: ${bgBlue};
  margin-bottom: ${spacing.sm};
  font-size: 3rem;
`;
