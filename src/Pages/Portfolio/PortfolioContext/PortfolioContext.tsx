import React, { createContext } from 'react';

//@ts-ignore
import deckedOutSS from './screenshots/decked-out.png';
//@ts-ignore
import whichThisIsThisSS from './screenshots/which-this-is-this.png';
//@ts-ignore
import letsTacoBoutItSS from './screenshots/lets-taco-bout-it.png';
//@ts-ignore
import roshamboTheGatheringSS from './screenshots/roshambo-the-gathering.png';

export interface PortfolioItemProps {
  name: string;
  slug: string;
  github: string;
  site: string;
  imgSrc: string;
  techStackIcons: string[];
  desc: string[];
  overview: string;
}

const state: PortfolioItemProps[] = [
  {
    name: 'decked out',
    slug: 'decked-out',
    github: 'https://github.com/mmcxii/decked-out',
    site: 'https://deckedout.herokuapp.com/',
    imgSrc: deckedOutSS,
    techStackIcons: ['fab fa-react', 'fab fa-node-js', 'fab fa-aws', 'fab fa-git-alt'],
    desc: [
      'Decked Out is the first full scale application I made with a team using modern web technologies. We used React on the front end, leveraging the Styled Components  library for CSS in JS, which allows for dynamic and functional styling that I can pass props to. These purely stylistic components, are then easily called whenever needed throughout the rest of the site, making the design consistent to the user and easy to comprehend to the developer.',
      'As I was familiar with React at the start of this project I took it upon myself to create structure for our application. I created an a library of elements, utilities, and a few custom Hooks for us to use throughout the site to ease the burden of new technology on my counterparts, and helped my teammates learn how to use React on the fly. I also handled the more complex aspects of our client-side app, such as setting up the React Router.',
      'Although I did not participate on the back-end of this project, my team used Node and Express to serve our app as well as the API for interacting with our database. Our data was split between a MySQL database which we interacted with using Sequelize, and an AWS S3 database.'
    ],
    overview:
      'A MERN stack companion app for Magic: the Gathering. Featuring a life-tracker, deck builder, and Oracle search for referencing card information.'
  },
  {
    name: 'which this is this?',
    slug: 'which-this-is-this',
    github: 'https://github.com/mmcxii/this-context-quiz',
    site: 'https://which-this-is-this.netlify.com/',
    imgSrc: whichThisIsThisSS,
    techStackIcons: ['fab fa-react', 'fab fa-sass'],
    desc: [
      'This is the second app I made with React. For this project I wanted to practice working with sending data up and down the prop chain, as well as managing a more complex state. I believe I could improve this project by implementing Redux for state managment, and by storing the questions in a database when I add more to the quiz.'
    ],
    overview: 'A quiz app for practicing different `this` contexts in JavaScript.'
  },
  {
    name: "let's taco 'bout it",
    slug: 'lets-taco-bout-it',
    github: 'https://github.com/mmcxii/lets-taco-bout-it',
    site: 'https://mmcxii.github.io/lets-taco-bout-it/',
    imgSrc: letsTacoBoutItSS,
    techStackIcons: ['fab fa-html5', 'fab fa-sass', 'fab fa-js-square', 'fab fa-git-alt'],
    desc: [
      "This was the first group project I participated in during my Boot Camp in 2019. I collaborated on the front-end, creating uniform components to be used across the site. We agreed on a mobile first approach to ensure that the site would look good on screens of all sizes, and I helped my fellow front-end collaborator to learn and use the Sass CSS pre-processor. We agreed to use the BEM class naming convetion to remove the overhead of deciding what to call certain elements, as well as for its ease of use with Sass's nesting functionality.",
      "As this was my first collaborative project it was also my introduction to Git and Github's tools for working with teammates such as Branching and Pull Requests.I greatly enjoyed working with my team; we communicated well and took great care in planning who was responsible for which parts of the documents.Thanks to our careful planning we had less than five total merge conflicts and the project was a true joy to work on.",
      "Though I did not play a role in creating the back-end for this project I did help select the API's that our team used: the Taco Fancy API, and the Yelp API."
    ],
    overview: 'A vanilla JS app for discovering nearby taquerias and/ or taco recipes.'
  },
  {
    name: 'roshambo: the gathering',
    slug: 'roshambo-the-gathering',
    github: 'https://github.com/mmcxii/rps-multiplayer',
    site: 'https://mmcxii.github.io/rps-multiplayer/',
    imgSrc: roshamboTheGatheringSS,
    techStackIcons: ['fab fa-html5', 'fab fa-sass', 'fab fa-js-square', 'fas fa-fire'],
    desc: [
      'This game was my first interaction with any sort of database, in this case Google Firebase. I found this project extremely challenging and it took my longer than any assignment throughout the Boot Camp to this point. To be precise, I had troubles grasping how I was to structure my database calls in conjunction with handling which user was which, and keeping track of users when one would leave the lobby. I am very pleased with how well the app came together in the end after how long I struggled with getting it to function.',
      'The theme is based entirely on the card game, Magic: the Gathering, a strategy game my friends and I have enjoyed for a decade now. This is one of my favorite designs I have executed in my career; in particular I love the way the buttons change when one is hovered, and how the content cards change color every time the page is loaded. It is a simple design to be sure but the look of the project came together exactly how I pictured it in my mind.'
    ],
    overview: 'A five option Rock-Paper-Scissors game themed around Magic: the Gathering for two players.'
  }
];

export const portfolioContext = createContext<PortfolioItemProps[]>(state);

export const PortfolioProvider = (props: any) => (
  <portfolioContext.Provider value={state}>{props.children}</portfolioContext.Provider>
);
