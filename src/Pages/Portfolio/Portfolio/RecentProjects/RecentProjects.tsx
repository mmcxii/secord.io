import React, { useEffect, useState } from 'react';

import { useRecentProjects } from './useRecentProjects';
import ProjectItem from './ProjectItem';

interface Props {}

export interface RecentProjectItemProps {
  id: number;
  name: string;
  htmlUrl: string;
  updatedAt: string;
  langs: {};
  homepage?: string;
  description?: string;
}

const RecentProjects: React.FC<Props> = () => {
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);
  const [portfolioItems, setPortfolioItems] = useState<RecentProjectItemProps[]>([]);

  const data = useRecentProjects({ setDataIsLoading });
  useEffect(() => {
    setPortfolioItems(data);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h3>Recent Projects</h3>
      <p>
        I'm always working on new projects! Here are a few of the most recent projects I've been working on.
      </p>
      <section>
        {dataIsLoading ? (
          <p>loading...</p>
        ) : (
          portfolioItems.map((item, index) => <ProjectItem testID={index} key={item.id} project={item} />)
        )}
      </section>
    </>
  );
};

export default RecentProjects;
