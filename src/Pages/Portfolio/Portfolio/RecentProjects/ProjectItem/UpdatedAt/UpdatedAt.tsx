import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

interface Props {
  updatedAt: string;
  testID: number;
}

const UpdatedAt: React.FC<Props> = ({ updatedAt, testID }) => {
  const formattedDate = new Date(updatedAt).toLocaleString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return <Wrapper data-testid={`updated-at--${testID}`}>Last Updated: {formattedDate}</Wrapper>;
};

export default UpdatedAt;

const Wrapper = styled.small`
  grid-area: updatedAt;
`;

UpdatedAt.propTypes = {
  updatedAt: PropTypes.string.isRequired,
  testID: PropTypes.number.isRequired,
};
