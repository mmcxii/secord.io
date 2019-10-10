import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { NavItemProps } from '../Nav';

interface Props {
  item: NavItemProps;
}

const NavItem: React.FC<Props> = ({ item: { page, link, icon } }) => (
  <li data-testid={`${page}-wrapper`}>
    <Link to={link} data-testid={`${page}-link`}>
      <i className={`fas ${icon}`} data-testid={`${page}-icon`} />
      <span data-testid={`${page}-text`}>{page}</span>
    </Link>
  </li>
);

export default NavItem;

NavItem.propTypes = {
  item: PropTypes.shape({
    page: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
