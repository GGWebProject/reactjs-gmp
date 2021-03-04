import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Filter.scss';
import GenreFilter from './GenreFilter/GenreFilter';
import SortFilter from './SortFilter/SortFilter';

const baseClassName = 'filter';

const Filter = ({ className, genres, sortOptions }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <form className={classNames}>
      <GenreFilter
        className={`${baseClassName}__genres-filter`}
        genres={genres}
      />
      <SortFilter
        className={`${baseClassName}__sort-filter`}
        sortOptions={sortOptions}
      />
    </form>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  sortOptions: PropTypes.arrayOf(PropTypes.string),
};

Filter.defaultProps = {
  className: '',
  genres: [],
  sortOptions: [],
};

export default Filter;
