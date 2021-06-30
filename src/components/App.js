import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../cssFiles/App.css';

import MainRoute from './MainRoute';
import PersonalInfo from '../personalInfo';

function App() {
	return (
		<>
			<Switch>
				<Route path='/personal-info'>
					<PersonalInfo />
				</Route>
				<Route path='/'>
					<MainRoute />
				</Route>
			</Switch>
		</>
	);
}

export default App;
