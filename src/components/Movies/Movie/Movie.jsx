import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { MovieEntity } from '../../../common/entities/MovieEntity';
import './Movie.scss';
import Image from '../../Image/Image';

const baseClassName = 'movie';

const Movie = ({ className, movieData }) => {
  const [isFailedImageLoad, setImageLoadStatus] = useState(false);

  const classNames = clsx(baseClassName, {
    [className]: className,
    [`${baseClassName}__image-error`]: isFailedImageLoad,
  });
  const { title, releaseDate, imageUrl, genres } = movieData;
  const genresString = genres.join(', ');

  const handleImageError = () => {
    setImageLoadStatus(true);
  };

  return (
    <div className={classNames}>
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

Movie.propTypes = {
  className: PropTypes.string,
  movieData: PropTypes.instanceOf(MovieEntity),
};

Movie.defaultProps = {
  className: '',
  movieData: new MovieEntity({}),
};

export default Movie;
