import React from 'react';

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

  return <small data-testid={`updated-at--${testID}`}>Last Updated: {formattedDate}</small>;
};

export default UpdatedAt;
