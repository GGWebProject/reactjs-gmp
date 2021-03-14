import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Portal = ({ children }) => {
  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);

    return () => {
      el.remove();
    };
  });

  return (
    ReactDOM.createPortal(children, el)
  );
};

Portal.propTypes = { children: PropTypes.node.isRequired };

Portal.defaultProps = {};

export default Portal;
