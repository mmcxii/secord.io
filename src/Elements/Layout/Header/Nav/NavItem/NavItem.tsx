import React from 'react';
import { Link } from 'react-router-dom';

import { NavItemProps } from '../Nav';

interface Props {
  item: NavItemProps;
}

const NavItem: React.FC<Props> = ({ item }) => (
  <li data-testid={`${item.page}-wrapper`}>
    <Link to={item.link} data-testid={`${item.page}-link`}>
      <i className={`fas ${item.icon}`} data-testid={`${item.page}-icon`} />
      <span data-testid={`${item.page}-text`}>{item.page}</span>
    </Link>
  </li>
);

export default NavItem;
