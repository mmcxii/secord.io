import React from 'react';
import styled from 'styled-components';

import { Card as C } from 'Elements';
import { spacing } from 'Utilities';

interface Props {}

const Bio: React.FC<Props> = () => (
  <Card>
    <SectionHeading>Technical Background</SectionHeading>
    <Paragraph>
      Hello! My name is Nich Secord, a front-end/ full-stack Web Developer from the Redmond, Washington area. As a
      recent graduate from the University of Washington Full-Stack Boot Camp program I am looking to break into the
      industry. I am interested in full-time, contract based, and freelance positions, working ether remote or on-site.
    </Paragraph>
    <Paragraph>
      I have a diverse range of skills at my disposal; ranging from the basics such as HTML, CSS (and Sass), and
      JavaScript, to more complicated and modern technologies like TypeScript, React (especially with Hooks),
      Styled-Components, and testing with Jest and Testing-Library. I am currently learned Redux as well for state
      management.
    </Paragraph>
    <Paragraph>I am capable on the back end of the stack as well using NodeJS, Express, MongoDB, and MySQL.</Paragraph>

    <SectionBreak />

    <SectionHeading>Personal Background</SectionHeading>

    <Paragraph>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam voluptates ut non? Quis consequatur placeat
      nesciunt? Voluptate perspiciatis repudiandae ipsum laboriosam vel et fugit quasi rerum cumque, facilis dignissimos
      molestiae.
    </Paragraph>
  </Card>
);

export default Bio;

const Card = styled(C).attrs({ as: 'section' })`
  grid-area: bio;

  max-width: calc(400px + (${spacing.md} * 2) + ${spacing.sm});
  justify-self: center;

  @media screen and (min-width: 992px) {
    max-width: initial;
  }
`;

const SectionHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${spacing.sm};
`;

const Paragraph = styled.p`
  &:not(:last-child) {
    margin-bottom: ${spacing.md};
  }
`;

const SectionBreak = styled.hr`
  margin: 0 ${spacing.xxl} ${spacing.md};
`;
