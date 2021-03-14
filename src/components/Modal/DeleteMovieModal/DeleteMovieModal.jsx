import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './DeleteMovieModal.scss';
import Button from '../../Button/Button';
import { submitButton } from '../../../common/entities/button-options';

const baseClassName = 'delete-movie-modal';

const DeleteMovieModal = ({ className, onClose }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  const handleClose = (event) => {
    event.preventDefault();

    onClose();
  };

  return (
    <form className={classNames}>
      <p className={`${baseClassName}__text`}>
        Are you sure you want to delete this movie
      </p>
      <div className={`${baseClassName}__controls`}>
        <Button
          buttonOptions={submitButton}
          className={`${baseClassName}__button`}
          onClick={handleClose}
        >
          Confirm
        </Button>
      </div>
    </form>
  );
};

DeleteMovieModal.propTypes = { className: PropTypes.string, onClose: PropTypes.func };

DeleteMovieModal.defaultProps = { className: '', onClose: () => {} };

export default DeleteMovieModal;
