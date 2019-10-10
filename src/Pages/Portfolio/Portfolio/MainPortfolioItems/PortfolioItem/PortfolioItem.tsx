import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PortfolioItemProps } from '../../../PortfolioContext';

interface Props {
  project: PortfolioItemProps;
  testID: number;
}

const PortfolioItem: React.FC<Props> = ({ project, testID }) => {
  return (
    <article data-testid={`portfolio-item--${testID}`}>
      <h4>
        <a href={project.site} target='blank' data-testid={`portfolio-item--${testID}__site-link`}>
          {project.name}
        </a>
      </h4>
      <a href={project.github} target='blank' data-testid={`portfolio-item--${testID}__repo-link`}>
        {project.name} github
      </a>
      <Link to={`/portfolio/${project.slug}`} data-testid={`portfolio-item--${testID}__detail-link`}>
        <img
          src={project.imgSrc}
          data-testid={`portfolio-item--${testID}__screenshot`}
          alt={`a screenshot of ${project.name}`}
        />
      </Link>
    </article>
  );
};

export default PortfolioItem;

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
  }).isRequired,
};
