import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './GenreFilter.scss';

const baseClassName = 'genres-filter';

const GenreFilter = ({ genres, className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <ul className={classNames}>
      {
        genres.map((filter, index) => {
          const isChecked = index === 0;

          return (
            <li className={`${baseClassName}__item`} key={filter}>
              <input
                defaultChecked={isChecked}
                onChange={() => { console.log(filter); }}
                className={`${baseClassName}__input`}
                type='radio'
                id={`${baseClassName}_${filter}`}
                value={filter}
                name={baseClassName}
              />
              <label
                className={`${baseClassName}__label`}
                htmlFor={`${baseClassName}_${filter}`}
              >
                {filter.toUpperCase()}
              </label>
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
