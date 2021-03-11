import React from 'react';
import PropTypes from 'prop-types';
import AddMovieButton from '../AddMovieButton/AddMovieButton';
import SearchButton from '../SearchButton/SearchButton';

export const BUTTONS_TYPES = { addMovie: 'addMovie', search: 'search' };

const TYPE_TO_BUTTONS_MAP = {
  [BUTTONS_TYPES.addMovie]: AddMovieButton,
  [BUTTONS_TYPES.search]: SearchButton,
};

const ButtonBuilder = ({ type, ...otherProps }) => {
  if (!TYPE_TO_BUTTONS_MAP[type]) {
    return <button>Стандартная кнопка</button>;
  }

  const Button = TYPE_TO_BUTTONS_MAP[type];

  return <Button {...otherProps} />;
};

ButtonBuilder.propTypes = { type: PropTypes.string };

ButtonBuilder.defaultProps = { type: null };

export default ButtonBuilder;
