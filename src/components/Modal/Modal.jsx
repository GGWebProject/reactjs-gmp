import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../Button/Button';
import Portal from '../Portal/Portal';
import './Modal.scss';
import { closeModalButton } from '../../common/entities/button-options';
import { ModalContext } from '../../core/Contexts';
import { MODAL_TYPES } from '../../common/entities/modal-entities';
import MovieModal from './MovieModal/MovieModal';
import DeleteMovieModal from './DeleteMovieModal/DeleteMovieModal';

const TYPE_TO_MODAL = {
  [MODAL_TYPES.add]: MovieModal,
  [MODAL_TYPES.edit]: MovieModal,
  [MODAL_TYPES.delete]: DeleteMovieModal,
};

const TYPE_TO_TITLE = {
  [MODAL_TYPES.add]: 'ADD MOVIE',
  [MODAL_TYPES.edit]: 'EDIT MOVIE',
  [MODAL_TYPES.delete]: 'DELETE MOVIE',
};

const baseClassName = 'modal';

const Modal = ({ className }) => {
  const { isOpen, type, setModalState } = useContext(ModalContext);
  const classNames = clsx(`${baseClassName}__content`, { [className]: className });

  const title = TYPE_TO_TITLE[type];
  const ModalBody = TYPE_TO_MODAL[type];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isOpen]);

  const handleClose = () => {
    setModalState({
      isModalOpen: false,
      type: null,
    });
  };

  return (
    isOpen && (
      <Portal>
        <div className={`${baseClassName}__overview`}>
          <div className={classNames}>
            <Button
              buttonOptions={closeModalButton}
              className={`${baseClassName}__close-button`}
              onClick={handleClose}
            />
            {
              title
                && (
                  <h3 className={`${baseClassName}__modal-title`}>
                    {title}
                  </h3>
                )
            }
            {
              ModalBody
                && <ModalBody className={`${baseClassName}__body`} onClose={handleClose} />
            }
          </div>
        </div>
      </Portal>
    )
  );
};

Modal.propTypes = { className: PropTypes.string };

Modal.defaultProps = { className: '' };

export default Modal;
