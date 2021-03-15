import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FALLBACK_IMAGE_URL from '../../assets/images/no-img.png';
import './Image.scss';

const baseClassName = 'image-block';

const Image = ({ className, alt, url, onErrorLoad }) => {
  const [isError, setErrorState] = useState(false);

  const classNames = clsx(baseClassName, {
    [className]: className,
    [`${baseClassName}--load-error`]: isError,
  });

  const imageSrc = isError ? FALLBACK_IMAGE_URL : url;

  const handleError = () => {
    setErrorState(true);
    onErrorLoad();
  };

  return (
    <div className={classNames}>
      <img
        className={`${baseClassName}__image`}
        alt={alt}
        src={imageSrc}
        onError={handleError}
      />
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
  onErrorLoad: PropTypes.func,
};

Image.defaultProps = {
  className: '',
  alt: '',
  url: '',
  onErrorLoad: () => {},
};

export default Image;
