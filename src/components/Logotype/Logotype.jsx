import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Logotype.scss';

const baseClassName = 'logotype';

const Logotype = ({ className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <div className={classNames}><span className={`${baseClassName}__accent-word`}>netflix</span>roulette</div>
  );
};

Logotype.propTypes = { className: PropTypes.string };

Logotype.defaultProps = { className: '' };

export default Logotype;
