import React from "react";
import PropTypes from "prop-types";

const Launcher = ({ children }) => <>{children}</>;

Launcher.propTypes = { children: PropTypes.element };
Launcher.defaultProps = { children: null };

export default Launcher;
