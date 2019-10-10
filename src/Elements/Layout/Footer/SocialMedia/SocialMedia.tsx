import React from 'react';
import styled from 'styled-components';

import SocialItem from './SocialItem';

interface Props {}

export interface SocialItemProps {
  name: string;
  link: string;
  icon: string;
}

const SocialMedia: React.FC<Props> = () => {
  const socials: SocialItemProps[] = [
    {
      name: 'github',
      link: 'https://github.com/mmcxii',
      icon: 'fa-github',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/nichsecord/',
      icon: 'fa-linkedin-in',
    },
    {
      name: 'twitter',
      link: 'https://twitter.com/nichsecord',
      icon: 'fa-twitter',
    },
  ];

  return (
    <SocialList data-testid='social-media'>
      {socials.map(item => (
        <SocialItem item={item} key={item.name} />
      ))}
    </SocialList>
  );
};

export default SocialMedia;

const SocialList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
