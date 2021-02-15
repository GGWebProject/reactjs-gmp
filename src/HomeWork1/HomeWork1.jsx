import React from 'react';
import ClassComponent from './components/ClassComponent/ClassComponent';
import ClassPureComponent from './components/ClassPureComponent/ClassPureComponent';
import { FunctionalComponent } from './components/FunctionalComponent/FunctionalComponent';
import CreateElementComponent from './components/CreateElementComponent/CreateElementComponent';

export const HomeWork1 = () => (
	<>
		<h1>HomeWork #1</h1>
		<ClassComponent />
		<hr />
		<ClassPureComponent />
		<hr />
		<FunctionalComponent />
		<hr />
		<CreateElementComponent />
	</>
);
