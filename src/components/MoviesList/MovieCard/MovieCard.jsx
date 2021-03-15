import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './MovieCard.scss';
import Image from '../../Image/Image';
import { Movie } from '../../../common/entities/movie';
import MovieOptions from './MovieOptions/MovieOptions';
import { MovieDetailsContext } from '../../../core/Contexts';

const baseClassName = 'movie';

const MovieCard = ({ className, movieData }) => {
  const { setMovieDetails } = useContext(MovieDetailsContext);
  const [isShowOption, setShowOptionState] = useState(false);

  const classNames = clsx(baseClassName, { [className]: className });
  const { title, releaseDate, imageUrl, genres } = movieData;
  const genresString = genres.join(', ');

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={classNames}
      onMouseEnter={() => setShowOptionState(true)}
      onMouseLeave={() => setShowOptionState(false)}
      onClick={() => { setMovieDetails({ movie: movieData }); }}
    >
      {
        isShowOption
          && <MovieOptions baseClassName={baseClassName} />
      }
      <Image
        className={`${baseClassName}__image`}
        url={imageUrl}
        alt={title}
      />
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
