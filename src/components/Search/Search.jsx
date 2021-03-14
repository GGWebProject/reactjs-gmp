import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Search.scss';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { searchButton } from '../../common/entities/button-options';

const inputPlaceHolder = 'What do you want to watch?';
const baseClassName = 'search';

const Search = ({ className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <form className={classNames}>
      <Input
        type='search'
        placeholder={inputPlaceHolder}
        baseClassName={baseClassName}
      />
      <Button buttonOptions={searchButton} className={`${baseClassName}__button`}>Search</Button>
    </form>
  );
};

Search.propTypes = { className: PropTypes.string };

Search.defaultProps = { className: '' };

export default Search;
