import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../Button';
import './Search.scss';
import { BUTTONS_TYPES } from '../Button/ButtonBuilder/ButtonBuilder';

const inputPlaceHolder = 'What do you want to watch?';
const baseClassName = 'search';

const Search = ({ className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <form className={classNames}>
      <input type='search' placeholder={inputPlaceHolder} className={`${baseClassName}__input`} />
      <Button type={BUTTONS_TYPES.search} className={`${baseClassName}__button`} />
    </form>
  );
};

Search.propTypes = { className: PropTypes.string };

Search.defaultProps = { className: '' };

export default Search;
