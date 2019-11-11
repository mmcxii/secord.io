import React, { useContext } from 'react';

import { portfolioContext } from '../../PortfolioContext';
import PortfolioItem from './PortfolioItem';

interface Props {}

const MainPortfolioItems: React.FC<Props> = () => {
  const portfolioItems = useContext(portfolioContext);

  return (
    <section>
      <h3>Portfolio</h3>
      <p>
        In my opinion, these projects stand a cut above the rest as examples of my best work to date. Click on
        an item to learn more about it and check out the code on GitHub!
      </p>
      <section>
        {portfolioItems.map((project, index) => (
          <PortfolioItem project={project} key={project.name} testID={index} />
        ))}
      </section>
    </section>
  );
};

export default MainPortfolioItems;
