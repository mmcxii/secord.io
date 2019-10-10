import React from 'react';

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
    <nav data-testid='navbar'>
      {navItems.map(item => (
        <NavItem item={item} key={item.page} />
      ))}
    </nav>
  );
};

export default Nav;
