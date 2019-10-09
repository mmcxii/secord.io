import React from 'react';

import RecentProjects from './RecentProjects';
import MainPortfolioItems from './MainPortfolioItems';

interface Props {}

const Porfolio: React.FC<Props> = () => {
  return (
    <>
      <h2>Portfolio</h2>
      <RecentProjects />
      <MainPortfolioItems />
    </>
  );
};

export default Porfolio;
