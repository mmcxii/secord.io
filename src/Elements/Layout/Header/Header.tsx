import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../Container';

import Nav from './Nav';

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper data-testid='header-wrapper'>
    <h1 data-testid='main-logo'>
      <Link to='/'>Nich Secord</Link>
    </h1>
    <Nav />
  </Wrapper>
);

export default Header;

const Wrapper = styled(Container).attrs({ as: 'header' })``;
