import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button/Button';
import { closeMovieOptionsButton } from '../../../../common/entities/button-options';
import { MODAL_TYPES } from '../../../../common/entities/modal-entities';
import { ModalContext } from '../../../../core/Contexts';
import './MovieOptions.scss';

const MovieOptions = ({ baseClassName }) => {
  const { setModalState } = useContext(ModalContext);
  const [isClosed, setClosedState] = useState(true);

  const handleModalOpen = (modalType) => {
    setClosedState(true);
    setModalState({
      isModalOpen: true,
      type: modalType,
    });
  };

  return (
    isClosed
      ? (
        <button
          className={`${baseClassName}__open-btn`}
          onClick={() => { setClosedState(false); }}
        >
          <div className='dot' />
          <div className='dot' />
          <div className='dot' />
        </button>
      )
      : (
        <div className={`${baseClassName}__options-wrapper`}>
          <Button
            onClick={() => { setClosedState(true); }}
            buttonOptions={closeMovieOptionsButton}
            className={`${baseClassName}__close-btn`}
          />
          <button
            onClick={() => { handleModalOpen(MODAL_TYPES.edit); }}
            className={`${baseClassName}__edit-movie-btn`}
          >
            edit
          </button>
          <button
            onClick={() => { handleModalOpen(MODAL_TYPES.delete); }}
            className={`${baseClassName}__remove-movie-btn`}
          >
            delete
          </button>
        </div>
      )
  );
};

MovieOptions.propTypes = { baseClassName: PropTypes.string };

MovieOptions.defaultProps = { baseClassName: '' };

export default MovieOptions;
