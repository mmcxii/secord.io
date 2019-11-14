import React from 'react';
import styled from 'styled-components';

import { spacing, white } from 'Utilities';
import Container from '../Container';
import SocialMedia from './SocialMedia';

interface Props {}

const Footer: React.FC<Props> = () => (
  <Wrapper data-testid='footer-wrapper'>
    <Byline data-testid='byline'>
      &copy;2019-present Nich Secord.
      <br />
      Icons copyright Font Awesome.
    </Byline>

    <SocialMedia />
  </Wrapper>
);

export default Footer;

const Wrapper = styled(Container).attrs({ as: 'footer' })`
  margin-top: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${spacing.md} 0;

  @media screen and (min-width: 992px) {
    text-align: start;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Byline = styled.p`
  font-style: italic;
  text-transform: capitalize;

  padding-bottom: ${spacing.sm};
  margin-bottom: ${spacing.sm};
  border-bottom: 2px solid ${white};

  @media screen and (min-width: 992px) {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }
`;
