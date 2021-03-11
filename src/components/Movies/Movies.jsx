import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Movie from './Movie/Movie';
import { MovieEntity } from '../../common/entities/MovieEntity';
import './Movies.scss';

const baseClassName = 'movies';

const Movies = ({ className, movies }) => {
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
              <Movie className={`${baseClassName}__item`} movieData={movieData} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

Movies.propTypes = {
  className: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.instanceOf(MovieEntity)),
};

Movies.defaultProps = {
  className: '',
  movies: [],
};

export default Movies;
