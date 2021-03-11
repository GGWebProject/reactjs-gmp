import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Logotype from '../../components/Logotype/Logotype';
import './Footer.scss';

const baseClassName = 'footer';

const Footer = ({ className }) => {
  const classNames = clsx(baseClassName, { [className]: className });

  return (
    <footer className={classNames}>
      <div className={`wrapper ${baseClassName}__wrapper`}>
        <Logotype className={`${baseClassName}__logotype`} />
      </div>
    </footer>
  );
};

Footer.propTypes = { className: PropTypes.string };

Footer.defaultProps = { className: '' };

export default Footer;
