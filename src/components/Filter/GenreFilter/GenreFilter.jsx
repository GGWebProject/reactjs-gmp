import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './GenreFilter.scss';
import Input from '../../Input/Input';

const baseClassName = 'genres-filter';

const GenreFilter = ({ genres, className }) => {
  const classNames = clsx(baseClassName, { [className]: className });
  const formattedGenres = ['All', ...genres];

  return (
    <ul className={classNames}>
      {
        formattedGenres.map((filter, index) => {
          const isChecked = index === 0;

          return (
            <li className={`${baseClassName}__item`} key={filter}>
              <Input
                label={filter.toUpperCase()}
                defaultChecked={isChecked}
                onChange={() => { console.log(filter); }}
                baseClassName={baseClassName}
                type='radio'
                id={`${baseClassName}_${filter}`}
                value={filter}
                name='genre'
              />
            </li>
          );
        })
      }
    </ul>
  );
};

GenreFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

GenreFilter.defaultProps = {
  genres: [],
  className: '',
};

export default GenreFilter;
