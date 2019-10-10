import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem';

interface Props {}

export interface NavItemProps {
  page: string;
  link: string;
  icon: string;
}

const Nav: React.FC<Props> = () => {
  const navItems: NavItemProps[] = [
    {
      page: 'about me',
      link: '/',
      icon: 'fa-user-circle',
    },
    {
      page: 'portfolio',
      link: '/portfolio',
      icon: 'fa-browser',
    },
    {
      page: 'contact',
      link: '/contact',
      icon: 'fa-id-card',
    },
  ];

  return (
    <Navbar data-testid='navbar'>
      <NavList data-testid='navlist'>
        {navItems.map(item => (
          <NavItem item={item} key={item.page} />
        ))}
      </NavList>
    </Navbar>
  );
};

export default Nav;

const Navbar = styled.nav`
  font-size: 1.2rem;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
