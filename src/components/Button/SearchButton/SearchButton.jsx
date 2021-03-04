import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './SearchButton.scss';

const baseClassName = 'search-button';

const SearchButton = ({ className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <button className={classNames}>Search</button>
  );
};

SearchButton.propTypes = { className: PropTypes.string };

SearchButton.defaultProps = { className: '' };

export default SearchButton;
