import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useRecentProjects } from './useRecentProjects';
import { spacing } from 'Utilities';
import ProjectItem from './ProjectItem';

interface Props {}

export interface RecentProjectItemProps {
  id: number;
  name: string;
  htmlUrl: string;
  updatedAt: string;
  langs: {};
  homepage?: string;
  description: string;
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
    <Wrapper>
      <h3>Recent Projects</h3>
      <p>
        I'm always working on new projects! Here are a few of the most recent projects I've been working on.
      </p>
      <ProjectsWrapper>
        {dataIsLoading ? (
          <p>loading...</p>
        ) : (
          portfolioItems.map((item, index) => <ProjectItem testID={index} key={item.id} project={item} />)
        )}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default RecentProjects;

const Wrapper = styled.section`
  margin: ${spacing.md} 0;
`;

const ProjectsWrapper = styled.section`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: ${spacing.md};
  margin: ${spacing.md} 0;

  @media screen and (min-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`;
