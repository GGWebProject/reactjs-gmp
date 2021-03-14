import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import MovieCard from './MovieCard/MovieCard';
import { Movie } from '../../common/entities/movie';
import './MoviesList.scss';

const baseClassName = 'movies';

const MoviesList = ({ className, movies }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <div className={classNames}>
      <div className={`${baseClassName}__counter`}>
        <span className={`${baseClassName}__counter-number`}>{movies.length}</span> movies found
      </div>
      <ul className={`${baseClassName}__list`}>
        {
          movies.map((movieData) => (
            <li key={movieData.id} className={`${baseClassName}__list-item`}>
              <MovieCard className={`${baseClassName}__item`} movieData={movieData} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  className: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.instanceOf(Movie)),
};

MoviesList.defaultProps = {
  className: '',
  movies: [],
};

export default MoviesList;
