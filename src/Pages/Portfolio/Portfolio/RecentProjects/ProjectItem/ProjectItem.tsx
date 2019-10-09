import React from 'react';

import { RecentProjectItemProps } from '../RecentProjects';

interface Props {
  project: RecentProjectItemProps;
  testID: number;
}

const ProjectItem: React.FC<Props> = ({ project, testID }) => {
  return (
    <article data-testid={`recent-project--${testID}`}>
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
    </article>
  );
};

export default ProjectItem;
