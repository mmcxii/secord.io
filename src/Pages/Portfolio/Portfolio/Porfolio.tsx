import React from 'react';

import RecentProjects from './RecentProjects';
import MainPortfolioItems from './MainPortfolioItems';

interface Props {}

const Porfolio: React.FC<Props> = () => {
  return (
    <section>
      <MainPortfolioItems />
      <RecentProjects />
    </section>
  );
};

export default Porfolio;
