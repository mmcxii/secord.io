import React from 'react';

import RecentProjects from './RecentProjects';
import MainPortfolioItems from './MainPortfolioItems';

interface Props {}

const Porfolio: React.FC<Props> = () => {
  return (
    <section>
      <RecentProjects />
      <MainPortfolioItems />
    </section>
  );
};

export default Porfolio;
