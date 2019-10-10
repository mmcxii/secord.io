import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import SocialMedia from './SocialMedia';

interface Props {}

const Footer: React.FC<Props> = () => (
  <Wrapper data-testid='footer-wrapper'>
    <p data-testid='byline'>Nich Secord &copy; 2019</p>

    <SocialMedia />
  </Wrapper>
);

export default Footer;

const Wrapper = styled(Container).attrs({ as: 'footer' })`
  margin-top: auto;
`;
