import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing, blue } from 'Utilities';
import { Card as C, ExtLink } from 'Elements';
import { UsesObject } from '../Uses';

interface Props {
  name: string;
  items: UsesObject[];
}

const UseCategory: React.FC<Props> = ({ name, items }) => (
  <Card>
    <h3>{name}</h3>
    <ul>
      {items.map(item => (
        <Item key={item.name}>
          <Icon className={item.icon} />
          <ExtLink href={item.link}>{item.name}</ExtLink>{' '}
          {item.name2 && item.link2 && (
            <>
              {' '}
              & <ExtLink href={item.link2}>{item.name2}</ExtLink>{' '}
            </>
          )}{' '}
          - {item.description}
        </Item>
      ))}
    </ul>
  </Card>
);

export default UseCategory;

UseCategory.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      name2: PropTypes.string,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      link2: PropTypes.string,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const Card = styled(C)`
  margin: ${spacing.lg} 0;
`;

const Icon = styled.i`
  margin-right: ${spacing.sm};
  color: ${blue};
`;

const Item = styled.li`
  margin: ${spacing.sm} 0;
  line-height: 130%;
`;
