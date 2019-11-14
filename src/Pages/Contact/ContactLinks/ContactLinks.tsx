import React from 'react';
import styled from 'styled-components';

//@ts-ignore
import Resume from 'Assets/resume/SECORD_resume.pdf';
import { spacing, transition, blue } from 'Utilities';

interface Props {}

const ConctactLinks: React.FC<Props> = () => {
  const links: { testId: string; href: string; icon: string; text: string }[] = [
    {
      testId: 'resume',
      href: Resume,
      icon: 'fas fa-file-user',
      text: 'Resume'
    },
    {
      testId: 'email',
      href: 'mailto:nich@secord.io',
      icon: 'fas fa-envelope',
      text: 'nich@secord.io'
    },
    {
      testId: 'github',
      href: 'https://www.github.com/mmcxii',
      icon: 'fab fa-github',
      text: 'mmcxii'
    },
    {
      testId: 'linkedin',
      href: 'https://www.linkedin.com/in/nichsecord',
      icon: 'fab fa-linkedin-in',
      text: 'nichsecord'
    },
    {
      testId: 'twitter',
      href: 'https://www.twitter.com/nichsecord',
      icon: 'fab fa-twitter',
      text: 'nichsecord'
    }
  ];

  return (
    <Wrapper>
      {links.map(item => (
        <Link href={item.href} target='_blank' data-testid={`link-${item.testId}`} key={item.testId}>
          <Icon className={item.icon} />
          {item.text}
        </Link>
      ))}
    </Wrapper>
  );
};

export default ConctactLinks;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${spacing.sm};
  grid-template-columns: 18px 1fr;
  margin: ${spacing.xs} 0;
  ${transition({ prop: 'color' })};

  &:hover {
    color: ${blue};
  }
`;

const Icon = styled.i`
  justify-self: center;
`;
