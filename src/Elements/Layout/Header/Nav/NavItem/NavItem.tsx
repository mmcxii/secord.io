import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { NavItemProps } from '../Nav';
import { spacing, white, blue, transition } from 'Utilities';

interface Props {
  item: NavItemProps;
}

const NavItem: React.FC<Props> = ({ item: { page, link, icon } }) => (
  <Wrapper data-testid={`${page}-wrapper`}>
    {link === '/' ? (
      <Link exact to={link} data-testid={`${page}-link`}>
        <Icon className={`fas ${icon}`} data-testid={`${page}-icon`} />
        <Label data-testid={`${page}-text`}>{page}</Label>
      </Link>
    ) : (
      <Link to={link} data-testid={`${page}-link`}>
        <Icon className={`fas ${icon}`} data-testid={`${page}-icon`} />
        <Label data-testid={`${page}-text`}>{page}</Label>
      </Link>
    )}
  </Wrapper>
);

export default NavItem;

NavItem.propTypes = {
  item: PropTypes.shape({
    page: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

const Wrapper = styled.li`
  text-align: center;
  padding: 0 ${spacing.sm};
  text-transform: capitalize;

  &:not(:last-child) {
    border-right: 2px solid ${white};
  }

  @media screen and (min-width: 576px) {
    padding: 0 ${spacing.md};
  }
`;

const Icon = styled.i`
  display: none;

  @media screen and (min-width: 576px) {
    display: inline;
  }
`;

const Label = styled.span`
  display: inline-block;
  position: relative;

  &::after {
    transform-origin: center;
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: ${white};
    position: absolute;
    bottom: -5px;
    left: 50%;
    transition: all ease-in-out 200ms;
    transform: translateX(-50%);
    opacity: 0;
    ${transition({ prop: 'opacity' })};
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  @media screen and (min-width: 576px) {
    margin-left: ${spacing.sm};
  }
`;

const Link = styled(NavLink)`
  &.active {
    color: ${blue};
    ${Icon} {
    }

    ${Label} {
      &::after {
        opacity: 1;
        background-color: ${blue};
      }
    }
  }
`;
