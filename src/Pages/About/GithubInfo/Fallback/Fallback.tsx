import React from 'react';
import styled from 'styled-components';

import {Card as C} from 'Elements';

interface Props {}

const Fallback: React.FC<Props> = () => <Card>Loading...</Card>;

export default Fallback;

const Card = styled(C).attrs({ as: 'section' })`
  grid-area: githubInfo;

  height: 576px;
  width: 492px;
`;