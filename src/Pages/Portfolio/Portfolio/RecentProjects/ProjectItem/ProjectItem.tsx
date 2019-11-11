import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { RecentProjectItemProps } from '../RecentProjects';
import { Card } from 'Elements';

interface Props {
  project: RecentProjectItemProps;
  testID: number;
}

const ProjectItem: React.FC<Props> = ({ project, testID }) => (
  <Wrapper data-testid={`recent-project--${testID}`}>
    <h4>{project.name}</h4>
    <a href={project.htmlUrl} target='blank' data-testid={`recent-project--${testID}__repo-link`}>
      Github
    </a>
    {project.homepage && (
      <a href={project.homepage} target='blank'>
        {project.homepage}
      </a>
    )}
    <p>
      <small>{project.updatedAt}</small>
    </p>
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

const Wrapper = styled(Card).attrs({ as: 'article' })``;
