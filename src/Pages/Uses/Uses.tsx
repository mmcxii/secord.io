import React from 'react';
import styled from 'styled-components';

import { spacing, blue } from 'Utilities';
import { Card as C, ExtLink } from 'Elements';

interface Props {}

const Uses: React.FC<Props> = () => {
  const editorAndTerminal: UsesObject[] = [
    {
      name: 'Visual Studio Code',
      icon: 'far fa-code',
      link: 'https://code.visualstudio.com/',
      description:
        'I have used VS Code for my entire career, I love its customization features and massive ecosystem of extensions.'
    },
    {
      name: 'Git Bash',
      icon: 'fab fa-git-alt',
      link: 'https://gitforwindows.org/',
      description:
        'Git Bash is a good enough terminal for my use. I am curious as to what other terminals are available, I would switch if I found one that truely provided a greater featureset.'
    },
    {
      name: 'Night Owl',
      icon: 'far fa-palette',
      link: 'https://marketplace.visualstudio.com/items?itemName=sdras.night-owl',
      description:
        'My current editor theme is Night Owl, I made the switch because of its extensive use of italics and pleasant blues and yellows.'
    },
    {
      name: 'Dank Mono',
      icon: 'far fa-font',
      link: 'https://dank.sh/',
      description:
        'I use Dank Mono in both my editor and terminal. I find that the little touches of cursive sprinkled throughout my editor spark joy, and help keep me inspired throughout my work day.'
    }
  ];

  const hardware: UsesObject[] = [
    {
      name: 'Lenovo ThinkPad X1 Yoga',
      icon: 'far fa-laptop',
      link: 'https://www.lenovo.com/us/en/laptops/thinkpad/thinkpad-yoga/ThinkPad-X1-Yoga-3rd-Gen/p/22TP2TXX13Y',
      description:
        'I upgraded to my ThinkPad in early 2019 and I love the thing to death! It is a complete workhorse and the keyboard experience is among the best I have ever known. I opted for the Yoga model because I wanted to keep the 2-in-1 experience which I have found to be useful when reviewing code or watching videos.'
    },
    {
      name: 'Lofree Four Seasons',
      icon: 'far fa-keyboard',
      link: 'https://www.lofree.co/products/lofree-four-seasons-mechanical-keyboard?variant=10501612896300',
      description:
        'I am currently trying out this keyboard. I love the look of it, however I feel that the Gateron Blue switches are a bit light for my taste. I am considering attempting to open it up to replace the switches with something a bit heavier such as a Red swtich.'
    },
    {
      name: 'BenQ GL2706PQ 27"',
      name2: 'LG 29UM58 29"',
      icon: 'far fa-desktop',
      link: 'https://www.amazon.com/gp/product/B06XDQ2RRQ',
      link2: 'https://www.amazon.com/gp/product/B01B67KAQ4',
      description:
        'My home office consists of two 27" Monitors and one 29" ultrawide flipped vertically. This excess of screen real estate has developed into a wonderful workflow where I can keep my editor, localhost, and reference material all in front of me at once.'
    },
    {
      name: 'CalDigit TS3 Plus',
      name2: 'Node Pro - eGPU',
      icon: 'fab fa-usb',
      link: 'https://www.amazon.com/gp/product/B07CZPV8DF',
      link2: 'https://www.amazon.com/gp/product/B077YCR5LC',
      description:
        'My home office is driven by a Thunderbolt 3 docking setup. My monitors are driven by an eGPU enclosure and the rest of my peripherals run through the CalDigit dock. My experience with Thunderbolt 3 has been largely positive, however it does occasionally hiccup so I can not endore the set-up 100%. However I will continue to use this type of set-up because I thoroughly enjoy it when it does work and I believe in its future.'
    }
  ];

  const other: UsesObject[] = [
    {
      name: 'Pacsafe x Unbox Therapy Briefcase',
      icon: 'far fa-briefcase',
      link: 'https://www.amazon.com/gp/product/B07TXNDTH3',
      description:
        "This bag is the nicest I have ever used. It is admittedly on the expensive side but I don't regret my purchase at all."
    },
    {
      name: 'Galaxy Note 9',
      icon: 'far fa-mobile-android',
      link: 'https://www.samsung.com/us/mobile/phones/galaxy-note/galaxy-note9-128gb--unlocked--sm-n960uzbaxaa/',
      description:
        'I am a huge fan of the Note line. I use the stylus every day and love the huge screen and battery the Note is known for.'
    },
    {
      name: 'Galaxy Watch',
      icon: 'far fa-watch',
      link:
        'https://www.samsung.com/us/mobile/wearables/smartwatches/galaxy-watch--46mm--silver--bluetooth--sm-r800nzsaxar/',
      description:
        'The Galaxy Watch is the best non-Apple smartwatch on the market. It has great battery life and the rotating bezel is an elegant design feature.'
    }
  ];

  return (
    <section>
      <h2>Uses</h2>
      <Card>
        <h3>Editor & Terminal</h3>
        <ul>
          {editorAndTerminal.map(item => (
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

      <Card>
        <h3>Hardware</h3>
        <ul>
          {hardware.map(item => (
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

      <Card>
        <h3>Other</h3>
        <ul>
          {other.map(item => (
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
    </section>
  );
};

export default Uses;

interface UsesObject {
  icon: string;
  name: string;
  name2?: string;
  link: string;
  link2?: string;
  description: string;
}

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
