import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const Launcher = ({ children }) => (
  <ErrorBoundary>
    {children}
  </ErrorBoundary>
);

Launcher.propTypes = { children: PropTypes.element };
Launcher.defaultProps = { children: null };

export default Launcher;
