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
    <Paragraph>
      I am capable with the back end of the stack as well using NodeJS, Express, MongoDB, and MySQL.
    </Paragraph>

    <SectionBreak />

    <SectionHeading>Personal Background</SectionHeading>
    <Paragraph>
      When not behind the keyboard I love traveling and spending time with friends and family. I'm always looking for
      new bars and restaraunts to try around town, I can't think of a better way to spend an evening than with good
      frinds, good food and drink, and some live music.
    </Paragraph>
    <Paragraph>
      However, I would say that my all time favorite passtime is the fine sport of skiing. I have been riding the slopes
      since I was seven years old, in fact I got my first job working as a Ski Instructor when I was thirteen at
      Snoqualmie Pass. Some of my fondest memories growing up are of my family and I on ski trips together in Canada,
      Colorado, Oregon, and Idaho.
    </Paragraph>

    <SectionBreak />

    <SectionHeading>Why Web Dev?</SectionHeading>
    <Paragraph>
      I have chosen to take on a career in Web Development because, quite simply, I love what I do. Being able to take
      on challenges that require both logical and creative thinking means I am never bored, and I love seeing the
      immediate tangible products of my actions. I relish in opportunities to learn, and one of my favorite parts of
      this industry is that it is constantly refining and improving upon itself, developing newer and better ways of
      solving the problems we face. I hope one day that I can be a contributor to the bleeding edge of open source
      technology.
    </Paragraph>
  </Card>
);

export default Bio;

const Card = styled(C).attrs({ as: 'section' })`
  grid-area: bio;

  /* Calc Value Determined by image width, <Card /> padding, and grid-gap of <GithubInfo /> */
  /* max-width: calc(400px + (${spacing.md} * 2) + ${spacing.sm}); */
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
