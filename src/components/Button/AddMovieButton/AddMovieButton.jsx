import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './AddMovieButton.scss';

const baseClassName = 'add-movie-button';

const AddMovieButton = ({ className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <button className={classNames}>+ add movie</button>
  );
};

AddMovieButton.propTypes = { className: PropTypes.string };

AddMovieButton.defaultProps = { className: '' };

export default AddMovieButton;
