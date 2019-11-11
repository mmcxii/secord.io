import styled from 'styled-components';

import { spacing, bgBlue2, rounded, elevation, transition } from 'Utilities';

export const Card = styled.div`
  padding: ${spacing.md};
  background: ${bgBlue2};
  border-radius: ${rounded};
  ${elevation[3]}
  ${transition({ prop: 'box-shadow' })};

  &:hover {
    ${elevation[4]}
  }
`;
