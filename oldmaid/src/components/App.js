import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import styled from 'styled-components';

import '../cssFiles/App.css';
//components
import Home from './Home.js';
import About from './About.js';
import NavBarMain from '../Navs/NavBarMain.js';
import OldMaidGame from './OldMaidGame.js';

function App() {
	return (
		<>
			<NavBarMain />
			<Switch>
				<Route path="/old-maid">
					<OldMaidGame />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);
}

export default App;
