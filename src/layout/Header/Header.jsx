import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../../components/Button';
import { BUTTONS_TYPES } from '../../components/Button/ButtonBuilder/ButtonBuilder';
import Logotype from '../../components/Logotype/Logotype';
import Search from '../../components/Search/Search';
import './Header.scss';

const baseClassName = 'header';

const Header = ({ className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <header className={classNames}>
      <div className={`wrapper ${baseClassName}__wrapper`}>
        <Logotype className={`${baseClassName}__logotype`} />
        <Button type={BUTTONS_TYPES.addMovie} className={`${baseClassName}__add-movie-button`} />
        <h1 className={`${baseClassName}__title`}>Find your movie</h1>
        <Search className={`${baseClassName}__search`} />
      </div>
    </header>
  );
};

Header.propTypes = { className: PropTypes.string };

Header.defaultProps = { className: '' };

export default Header;
