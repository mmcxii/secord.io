import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { RecentProjectItemProps } from '../RecentProjects';
import { Card } from 'Elements';
import UpdatedAt from './UpdatedAt';

interface Props {
  project: RecentProjectItemProps;
  testID: number;
}

const ProjectItem: React.FC<Props> = ({ project, testID }) => (
  <Wrapper data-testid={`recent-project--${testID}`}>
    <h4>
      {project.homepage ? (
        <a href={project.homepage} target='blank'>
          {project.name}
        </a>
      ) : (
        <>{project.name}</>
      )}
    </h4>

    <a href={project.htmlUrl} target='blank' data-testid={`recent-project--${testID}__repo-link`}>
      <i className='fab fa-github' />
    </a>

    <UpdatedAt updatedAt={project.updatedAt} />

    {project.description && <p>{project.description}</p>}
    <ol>
      {Object.keys(project.langs).map((lang, index) => (
        <li key={lang} data-testid={`recent-project--${testID}__lang-${index}`}>
          {lang}
        </li>
      ))}
    </ol>
  </Wrapper>
);

export default ProjectItem;

const Wrapper = styled(Card).attrs({ as: 'article' })`
  max-width: 100%;
`;

ProjectItem.propTypes = {
  testID: PropTypes.number.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    htmlUrl: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    homepage: PropTypes.string,
    description: PropTypes.string,
    langs: PropTypes.object.isRequired,
  }).isRequired,
};
