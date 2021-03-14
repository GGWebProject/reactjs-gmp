import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Button.scss';
import { ButtonOptions } from '../../common/entities/button-options';

const baseClassName = 'button';

const Button = ({ buttonOptions, className, children, onClick }) => {
  const { ariaLabel, size, type } = buttonOptions;

  const classNames = clsx(baseClassName, {
    [`${baseClassName}--${type}`]: type,
    [`${baseClassName}--size_${size}`]: size,
    [className]: className,
  });

  return (
    <button
      className={classNames}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      { children }
    </button>
  );
};

Button.propTypes = {
  buttonOptions: PropTypes.instanceOf(ButtonOptions).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  children: null,
  onClick: () => {},
};

export default Button;
