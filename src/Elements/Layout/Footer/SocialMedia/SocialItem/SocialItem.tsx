import React from 'react';
import PropTypes from 'prop-types';

import { SocialItemProps } from '../SocialMedia';

interface Props {
  item: SocialItemProps;
}

const SocialItem: React.FC<Props> = ({ item }) => (
  <li data-testid={`social-item--${item.name}`}>
    <a href={item.link} target='blank' data-testid={`social-item--${item.name}__link`}>
      <i className={`fab ${item.icon}`} data-testid={`social-item--${item.name}__icon`} />
    </a>
  </li>
);

export default SocialItem;

SocialItem.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
