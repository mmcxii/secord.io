import styled from 'styled-components';

import { roundedInner, spacing, bgBlue2, white, transition, blue, bgBlue } from 'Utilities';

export const Button = styled.button<{ light?: boolean; dark?: boolean }>`
  cursor: pointer;
  border-radius: ${roundedInner};
  border: none;
  padding: ${spacing.sm} ${spacing.md};
  background: ${bgBlue2};
  color: ${white};
  ${transition({ prop: 'background' })}
  ${props => props.light && `background: ${white}; color: ${bgBlue};`}
  ${props => props.dark && `background: ${bgBlue};`}

  &:hover {
    background: ${blue};
  }
`;
