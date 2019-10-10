import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing, green, orange } from 'Utilities';
import { SocialItemProps } from '../SocialMedia';

interface Props {
  item: SocialItemProps;
}

const SocialItem: React.FC<Props> = ({ item }) => (
  <Wrapper data-testid={`social-item--${item.name}`}>
    <Link href={item.link} target='blank' data-testid={`social-item--${item.name}__link`}>
      <Icon className={`fab ${item.icon}`} data-testid={`social-item--${item.name}__icon`} />
    </Link>
  </Wrapper>
);

export default SocialItem;

SocialItem.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

const Wrapper = styled.li`
  margin: 0 ${spacing.sm};
  font-size: 1.75rem;
`;

const Link = styled.a`
  color: ${green};
  transition: color ease-in 250ms;

  &:hover {
    color: ${orange};
  }
`;

const Icon = styled.i`
  color: inherit;
`;
