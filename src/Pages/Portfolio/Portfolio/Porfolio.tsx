import React from 'react';

import RecentProjects from './RecentProjects';
import MainPortfolioItems from './MainPortfolioItems';

interface Props {}

const Porfolio: React.FC<Props> = () => {
  return (
    <section>
      <h2>My Work</h2>
      <RecentProjects />
      <MainPortfolioItems />
    </section>
  );
};

export default Porfolio;
