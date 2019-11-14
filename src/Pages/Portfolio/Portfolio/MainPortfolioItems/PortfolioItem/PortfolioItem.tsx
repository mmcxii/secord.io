import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

import { PortfolioItemProps } from '../../../PortfolioContext';
import { spacing, roundedInner, transition, blue, elevation } from 'Utilities';
import { Card as C } from 'Elements';

interface Props {
  project: PortfolioItemProps;
  testID: number;
}

const PortfolioItem: React.FC<Props> = ({ project, testID }) => {
  return (
    <Card data-testid={`portfolio-item--${testID}`}>
      <Title>
        <a href={project.site} target='blank' data-testid={`portfolio-item--${testID}__site-link`}>
          {project.name}
        </a>
      </Title>

      <GithubLink href={project.github} target='blank' data-testid={`portfolio-item--${testID}__repo-link`}>
        <i className='fab fa-github' />
      </GithubLink>

      <Overview>{project.overview}</Overview>

      <ScreenshotWrapper to={`/portfolio/${project.slug}`} data-testid={`portfolio-item--${testID}__detail-link`}>
        <Overdrive id={`${project.slug}-ss`}>
          <Screenshot
            src={project.imgSrc}
            data-testid={`portfolio-item--${testID}__screenshot`}
            alt={`a screenshot of ${project.name}`}
          />
        </Overdrive>
      </ScreenshotWrapper>
    </Card>
  );
};

export default PortfolioItem;

const Card = styled(C).attrs({ as: 'article' })`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: repeat(3, max-content);
  grid-template-areas:
    'title github'
    'screenshot screenshot'
    'overview overview';
  grid-gap: ${spacing.md};
`;

const Title = styled.h3`
  grid-area: title;

  font-size: 1.4rem;
`;

const GithubLink = styled.a`
  grid-area: github;

  font-size: 1.5rem;
  justify-self: flex-end;
  ${transition({ prop: 'color' })};

  &:hover {
    color: ${blue};
  }
`;

const Overview = styled.p`
  grid-area: overview;
`;

const ScreenshotWrapper = styled(Link)`
  grid-area: screenshot;

  margin: 0 auto;
`;

const Screenshot = styled.img`
  width: 100%;
  border-radius: ${roundedInner};
  ${elevation[4]}

  @media screen and (min-width: 992px) {
    max-height: 500px;
    max-width: 500px;
  }
`;

PortfolioItem.propTypes = {
  testID: PropTypes.number.isRequired,
  project: PropTypes.exact({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    site: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    techStackIcons: PropTypes.array.isRequired,
    desc: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired
  }).isRequired
};
