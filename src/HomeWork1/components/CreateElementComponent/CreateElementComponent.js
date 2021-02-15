import React from 'react';

export default class extends React.PureComponent {
	render() {
		return (
			React.createElement(
				'h2',
				null,
				'This is a CreateElementComponent',
			)
		);
	}
}
