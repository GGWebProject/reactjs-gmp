import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FALLBACK_IMAGE_URL from '../../assets/images/no-img.png';

const Image = ({ className, alt, url, onErrorLoad }) => {
  const [imageSrc, setImageSrc] = useState(url);

  const handleError = () => {
    setImageSrc(FALLBACK_IMAGE_URL);
    onErrorLoad();
  };

  return (
    <img
      className={className}
      alt={alt}
      src={imageSrc}
      onError={handleError}
    />
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
