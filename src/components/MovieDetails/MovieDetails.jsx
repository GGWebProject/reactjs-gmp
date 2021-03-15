import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from '../Image/Image';
import { Movie } from '../../common/entities/movie';
import './MovieDetails.scss';

const baseClassName = 'movie-details';

const MovieDetails = ({ movieData }) => {
  const classNames = clsx(baseClassName);
  const { description, genres, imageUrl, releaseDate, runtime, title, rating } = movieData;

  return (
    <div className={classNames}>
      <Image
        className={`${baseClassName}__image`}
        url={imageUrl}
        alt={title}
      />
      <div className={`${baseClassName}__description`}>
        <div className={`${baseClassName}__description-row`}>
          <h2 className={`${baseClassName}__title`}>{title}</h2>
          <div className={`${baseClassName}__rating`}>{rating}</div>
        </div>
        <p className={`${baseClassName}__genres`}>{genres.join(', ')}</p>
        <div className={`${baseClassName}__description-row`}>
          <span className={`${baseClassName}__movie-release`}>{releaseDate}</span>
          <span className={`${baseClassName}__movie-duration`}>{runtime}</span>
        </div>
        <p className={`${baseClassName}__text`}>{description}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = { movieData: PropTypes.instanceOf(Movie).isRequired };

export default MovieDetails;
