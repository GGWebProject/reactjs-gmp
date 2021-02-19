import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

const Launcher = ({ children }) => (
	<Router>
		{ children }
	</Router>
);

Launcher.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element, PropTypes.arrayOf(PropTypes.element),
	]),
};

Launcher.defaultProps = {
	children: null,
};

export default Launcher;
