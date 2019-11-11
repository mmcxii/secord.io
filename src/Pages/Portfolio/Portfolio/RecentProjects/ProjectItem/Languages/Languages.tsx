import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing } from 'Utilities';

interface Props {
  langs: {};
  testID: number;
}

const Languages: React.FC<Props> = ({ langs, testID }) => {
  const keys: string[] = Object.keys(langs);
  const values: number[] = Object.values(langs);
  const totalLines: number = values.reduce((prev: number, current: number): number => prev + current);

  return (
    <Wrapper>
      {keys.map((lang, index) => (
        <Item key={lang} data-testid={`recent-project--${testID}__lang-${index}`}>
          <Language>{lang}</Language>: {((values[index] / totalLines) * 100).toFixed(1)}%
        </Item>
      ))}
    </Wrapper>
  );
};

export default Languages;

const Wrapper = styled.ol`
  grid-area: langs;
`;

const Item = styled.li`
  margin: ${spacing.xs} 0;
`;

const Language = styled.span`
  font-weight: bolder;
`;

Languages.propTypes = {
  langs: PropTypes.object.isRequired,
  testID: PropTypes.number.isRequired,
};
