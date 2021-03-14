import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SelectOption } from '../../common/entities/select-entities';
import { Option } from './Option/Option';

const Select = ({ baseClassName, name, labelText, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const selectedIndexElement = options.findIndex((option) => option === false);

    setSelectedValue(selectedIndexElement ?? 0);
  }, [options]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={`${baseClassName}__select-wrapper`}>
      {
        labelText
          && <span className={`${baseClassName}__select-label`}>{labelText}</span>
      }
      <select
        name={name}
        className={`${baseClassName}__list`}
        value={selectedValue}
        onChange={handleChange}
      >
        {
          options.map((optionData) => (
            <Option
              className={`${baseClassName}__list-item`}
              key={optionData.value}
              optionData={optionData}
            />
          ))
        }
      </select>
    </label>
  );
};

Select.propTypes = {
  baseClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.instanceOf(SelectOption)).isRequired,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  baseClassName: '',
  labelText: null,
  onChange: () => {},
};

export default Select;
