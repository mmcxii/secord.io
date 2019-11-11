import React, { useContext } from 'react';
import styled from 'styled-components';

import { portfolioContext } from '../../PortfolioContext';
import { spacing } from 'Utilities';
import PortfolioItem from './PortfolioItem';

interface Props {}

const MainPortfolioItems: React.FC<Props> = () => {
  const portfolioItems = useContext(portfolioContext);

  return (
    <section>
      <h2>My Work</h2>
      <p>
        In my opinion, these projects stand a cut above the rest as examples of my best work to date. Click on
        an item to learn more about it and check out the code on GitHub!
      </p>
      <ProjectsWrapper>
        {portfolioItems.map((project, index) => (
          <PortfolioItem project={project} key={project.name} testID={index} />
        ))}
      </ProjectsWrapper>
    </section>
  );
};

export default MainPortfolioItems;

const ProjectsWrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: ${spacing.lg};
  margin: ${spacing.md} 0;

  @media screen and (min-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;
