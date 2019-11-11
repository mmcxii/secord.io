import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { spacing } from 'Utilities';
import Container from '../Container';
import Nav from './Nav';

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper data-testid='header-wrapper'>
    <Logo data-testid='main-logo'>
      <Link to='/'>Nich Secord</Link>
    </Logo>
    <Nav />
  </Wrapper>
);

export default Header;

const Wrapper = styled(Container).attrs({ as: 'header' })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${spacing.md} 0;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;
