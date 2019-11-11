import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { portfolioContext, PortfolioItemProps } from '../PortfolioContext';
import { spacing, roundedInner, blue } from 'Utilities';
import { Card } from 'Elements';

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
  }, [projects, projectSlug]);

  return (
    <>
      {project && (
        <Wrapper>
          <Title data-testid='project-title'>
            <a href={project.site} data-testid='project-site-link'>
              {project.name}
            </a>
          </Title>

          <GithubLink href={project.github} data-testid='project-repo-link'>
            <i className='fab fa-github' />
          </GithubLink>

          <Description data-testid='project-description'>
            <TechIcons data-testid='project-stack'>
              {project.techStackIcons.map(icon => (
                <TechIcon className={icon} key={icon} />
              ))}
            </TechIcons>

            {project.desc.map((para, i) => (
              <Paragraph key={`p-${i + 1}`}>{para}</Paragraph>
            ))}
          </Description>

          <Screenshot
            src={project.imgSrc}
            data-testid='project-screenshot'
            alt={`A screenshot of ${project.name}`}
          />
        </Wrapper>
      )}
    </>
  );
};

export default PortfolioDetail;

const Wrapper = styled(Card).attrs({ as: 'section' })`
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr 1fr max-content;
  grid-template-areas:
    'title title github'
    'screenshot description description';
  grid-gap: ${spacing.lg};
`;

const Title = styled.h2`
  grid-area: title;
`;

const GithubLink = styled.a`
  grid-area: github;

  font-size: 1.5rem;
  padding: ${spacing.sm};

  &:hover {
    color: ${blue};
  }
`;

const Description = styled.section`
  grid-area: description;
`;

const TechIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TechIcon = styled.i`
  font-size: 2rem;
`;

const Paragraph = styled.p`
  margin: ${spacing.md} 0;
`;

const Screenshot = styled.img`
  grid-area: screenshot;
  width: 100%;
  border-radius: ${roundedInner};
`;
