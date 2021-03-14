import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './MovieCard.scss';
import Image from '../../Image/Image';
import { Movie } from '../../../common/entities/movie';
import MovieOptions from './MovieOptions/MovieOptions';

const baseClassName = 'movie';

const MovieCard = ({ className, movieData }) => {
  const [isFailedImageLoad, setImageError] = useState(false);
  const [isShowOption, setShowOptionState] = useState(false);

  const classNames = clsx(baseClassName, {
    [className]: className,
    [`${baseClassName}__image-error`]: isFailedImageLoad,
  });
  const { title, releaseDate, imageUrl, genres } = movieData;
  const genresString = genres.join(', ');

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={classNames}
      onMouseEnter={() => setShowOptionState(true)}
      onMouseLeave={() => setShowOptionState(false)}
    >
      {
        isShowOption
          && <MovieOptions baseClassName={baseClassName} />
      }
      <div className={`${baseClassName}__image-wrapper`}>
        <Image
          className={`${baseClassName}__image`}
          url={imageUrl}
          alt={title}
          onErrorLoad={handleImageError}
        />
      </div>
      <div className={`${baseClassName}__description`}>
        <h3 className={`${baseClassName}__title`}>{title}</h3>
        <span className={`${baseClassName}__release`}>{releaseDate}</span>
        <span className={`${baseClassName}__genre`}>{genresString}</span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  className: PropTypes.string,
  movieData: PropTypes.instanceOf(Movie),
};

MovieCard.defaultProps = {
  className: '',
  movieData: new Movie({}),
};

export default MovieCard;
