import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Input from '../../Input/Input';
import Select from '../../Select/Select';
import { MOCK_AVAILABLE_GENRES_FILTERS } from '../../../__MOCK__/filters';
import { SelectOption } from '../../../common/entities/select-entities';
import './MovieModal.scss';
import Button from '../../Button/Button';
import { cancelButton, submitButton } from '../../../common/entities/button-options';

const baseClassName = 'movie-modal';

const MovieModal = ({ className, onClose }) => {
  const classNames = clsx(baseClassName, { [className]: className });
  const selectOptions = [
    new SelectOption({ value: 'Select genre', isDisabled: true, isSelected: true }),
    ...MOCK_AVAILABLE_GENRES_FILTERS.map((genre) => (
      new SelectOption({ value: genre })
    )),
  ];

  const handleClose = (event) => {
    event.preventDefault();

    onClose();
  };

  return (
    <form className={classNames}>
      <Input
        label='Title'
        type='text'
        placeholder='Title here'
        baseClassName={baseClassName}
        name='Film title'
      />
      <Input
        label='Release Date'
        type='date'
        placeholder='Select date'
        baseClassName={baseClassName}
        name='Release Date'
      />
      <Input
        label='Movie URL'
        type='text'
        placeholder='Movie URL here'
        baseClassName={baseClassName}
        name='Movie URL'
      />
      <Select
        labelText='Genre'
        defaultOptionLabel='Select Genre'
        options={selectOptions}
        baseClassName={baseClassName}
        name='genre'
      />
      <Input
        label='Overview'
        type='text'
        placeholder='Overview here'
        baseClassName={baseClassName}
        name='Overview'
      />
      <Input
        label='Runtime'
        type='text'
        placeholder='Runtime here'
        baseClassName={baseClassName}
        name='Runtime'
      />
      <div className={`${baseClassName}__controls`}>
        <Button
          buttonOptions={cancelButton}
          className={`${baseClassName}__button`}
          onClick={handleClose}
        >
          Reset
        </Button>
        <Button
          buttonOptions={submitButton}
          className={`${baseClassName}__button`}
          onClick={handleClose}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

MovieModal.propTypes = { className: PropTypes.string, onClose: PropTypes.func };

MovieModal.defaultProps = { className: '', onClose: () => {} };

export default MovieModal;
