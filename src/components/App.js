import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../cssFiles/App.css';

import Main from './Main';
import About from '../about';

function App() {
	return (
		<>
			<Switch>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/'>
					<Main />
				</Route>
			</Switch>
		</>
	);
}

export default App;
