import React from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';

interface Props {}

const Header: React.FC<Props> = () => (
  <header data-testid='header-wrapper'>
    <h1 data-testid='main-logo'>
      <Link to='/'>Nich Secord</Link>
    </h1>
    <Nav />
  </header>
);

export default Header;
