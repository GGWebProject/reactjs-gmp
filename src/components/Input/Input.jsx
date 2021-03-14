import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, baseClassName, label, ...otherProps }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={`${baseClassName}__input-wrapper`}>
    <input
      className={`${baseClassName}__input`}
      {...otherProps}
    />
    {
        label
        && <span className={`${baseClassName}__input-label`}>{label}</span>
      }
  </label>
);

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  baseClassName: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: null,
  baseClassName: '',
};

export default Input;
