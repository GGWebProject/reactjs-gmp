import React from 'react';
import PropTypes from 'prop-types';
import { SelectOption } from '../../../common/entities/select-entities';

export const Option = ({ className, optionData }) => {
  const { value, label, isDisabled } = optionData;

  return (
    <option
      className={className}
      value={value}
      disabled={isDisabled}
    >
      { label }
    </option>
  );
};

Option.propTypes = {
  className: PropTypes.string,
  optionData: PropTypes.instanceOf(SelectOption).isRequired,
};

Option.defaultProps = { className: '' };
