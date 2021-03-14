import React from 'react';
import PropTypes from 'prop-types';
import './SortFilter.scss';
import clsx from 'clsx';
import Select from '../../Select/Select';
import { SelectOption } from '../../../common/entities/select-entities';

const baseClassName = 'sort-filter';

const SortFilter = ({ sortOptions, className }) => {
  const classNames = clsx(baseClassName, { [className]: className });
  const selectOptions = sortOptions.map((option) => (
    new SelectOption({
      value: option,
      label: option,
    })
  ));

  return (
    <div className={classNames}>
      <Select
        labelText='Sort by'
        options={selectOptions}
        name='sort-by'
        baseClassName={baseClassName}
      />
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
