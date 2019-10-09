import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { portfolioContext, PortfolioItemProps } from '../PortfolioContext';

interface Props {}

const PortfolioDetail: React.FC<Props> = () => {
  const { projectSlug } = useParams();
  const projects = useContext(portfolioContext);

  const [project, setProject] = useState<PortfolioItemProps | null>(null);

  useEffect(() => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].slug === projectSlug) {
        setProject(projects[i]);
        break;
      }
    }
  }, []);

  return (
    <>
      {project && (
        <>
          <h2 data-testid='project-title'>
            <a href={project.site} data-testid='project-site-link'>
              {project.name}
            </a>
          </h2>

          <a href={project.github} data-testid='project-repo-link'>
            Github
          </a>

          <div data-testid='project-description'>
            <div data-testid='project-stack'>
              {project.techStackIcons.map(icon => (
                <i className={icon} key={icon} />
              ))}
            </div>
            {project.desc.map((para, i) => (
              <p key={`p-${i + 1}`}>{para}</p>
            ))}
          </div>

          <img src={project.imgSrc} data-testid='project-screenshot' alt='A screenshot of Decked Out' />
        </>
      )}
    </>
  );
};

export default PortfolioDetail;
