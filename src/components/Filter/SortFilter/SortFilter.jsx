import React from 'react';
import PropTypes from 'prop-types';
import './SortFilter.scss';
import clsx from 'clsx';

const baseClassName = 'sort-filter';

const SortFilter = ({ sortOptions, className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <div className={classNames}>
      <span className={`${baseClassName}__label`}>Sort by</span>
      <select name='sort-by' className={`${baseClassName}__select`} defaultValue={sortOptions[0]}>
        {
          sortOptions.map((option) => (
            <option
              className={`${baseClassName}__select-item`}
              key={option}
              value={option}
            >
              {option}
            </option>
          ))
        }
      </select>
    </div>
  );
};

SortFilter.propTypes = {
  className: PropTypes.string,
  sortOptions: PropTypes.arrayOf(PropTypes.string),
};

SortFilter.defaultProps = {
  className: '',
  sortOptions: [],
};

export default SortFilter;
