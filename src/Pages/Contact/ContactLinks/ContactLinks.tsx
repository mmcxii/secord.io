import React from 'react';

//@ts-ignore
import Resume from 'Assets/resume/SECORD_resume.pdf';

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
    <section>
      {links.map(item => (
        <a href={item.href} target='_blank' data-testid={`link-${item.testId}`} key={item.testId}>
          <i className={item.icon} />
          {item.text}
        </a>
      ))}
    </section>
  );
};

export default ConctactLinks;
