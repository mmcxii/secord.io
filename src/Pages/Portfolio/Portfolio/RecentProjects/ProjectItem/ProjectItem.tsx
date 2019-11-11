import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { RecentProjectItemProps } from '../RecentProjects';
import { spacing, transition, blue } from 'Utilities';
import { Card } from 'Elements';
import UpdatedAt from './UpdatedAt';
import Languages from './Languages';

interface Props {
  project: RecentProjectItemProps;
  testID: number;
}

const ProjectItem: React.FC<Props> = ({ project, testID }) => (
  <Wrapper data-testid={`recent-project--${testID}`}>
    <Title>
      {project.homepage ? (
        <a href={project.homepage} target='blank'>
          {project.name}
        </a>
      ) : (
        <>{project.name}</>
      )}
    </Title>

    <GithubLink href={project.htmlUrl} target='blank' data-testid={`recent-project--${testID}__repo-link`}>
      <i className='fab fa-github' />
    </GithubLink>

    <UpdatedAt updatedAt={project.updatedAt} testID={testID} />

    <Description>{project.description}</Description>

    <Languages langs={project.langs} testID={testID} />
  </Wrapper>
);

export default ProjectItem;

const Wrapper = styled(Card).attrs({ as: 'article' })`
  display: grid;
  grid-template-rows: repeat(3, max-content) 1fr;
  grid-template-columns: 1fr max-content;
  grid-template-areas:
    'title github'
    'updatedAt updatedAt'
    'desc desc'
    'langs langs';
  grid-gap: ${spacing.sm};
`;

const Title = styled.h3`
  grid-area: title;

  font-size: 1.4rem;
`;

const GithubLink = styled.a`
  grid-area: github;

  font-size: 1.5rem;
  ${transition({ prop: 'color' })};

  &:hover {
    color: ${blue};
  }
`;

const Description = styled.p`
  grid-area: desc;
`;

ProjectItem.propTypes = {
  testID: PropTypes.number.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    htmlUrl: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    homepage: PropTypes.string,
    description: PropTypes.string.isRequired,
    langs: PropTypes.object.isRequired,
  }).isRequired,
};
