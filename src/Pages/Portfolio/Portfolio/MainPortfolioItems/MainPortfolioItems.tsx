import React, { useContext } from 'react';

import { portfolioContext } from 'Pages/Portfolio/PortfolioContext';
import PortfolioItem from './PortfolioItem';

interface Props {}

const MainPortfolioItems: React.FC<Props> = () => {
  const portfolioItems = useContext(portfolioContext);

  return (
    <>
      <h3>Main Portfolio Items</h3>
      <p>In my opinion, these projects stand a cut above the rest as examples of my best work to date.</p>
      <section>
        {portfolioItems.map((project, index) => (
          <PortfolioItem project={project} key={project.name} testID={index} />
        ))}
      </section>
    </>
  );
};

export default MainPortfolioItems;
