import React from 'react';

interface Props {
  updatedAt: string;
}

const UpdatedAt: React.FC<Props> = ({ updatedAt }) => {
  const formattedDate = new Date(updatedAt).toLocaleString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return <small data-testid='updated-at'>Last Updated: {formattedDate}</small>;
};

export default UpdatedAt;
