import styled from 'styled-components';

import { transition, blue } from 'Utilities';

export const ExtLink = styled.a.attrs({ target: '_blank' })`
  ${transition({ prop: 'color' })};
  padding-block-end: 2px;
  border-block-end: 2px solid ${blue};
  display: inline-block;

  &:hover {
    color: ${blue};
  }
`;
