import React from 'react';
import { Link } from 'react-router-dom';

import { NavItemProps } from '../Nav';

interface Props {
  item: NavItemProps;
}

const NavItem: React.FC<Props> = ({ item }) => <li></li>;

export default NavItem;
