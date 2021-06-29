import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../cssFiles/App.css';
//components
import Home from './Home.js';
import Work from './Work.js';
import NavBarMain from '../Navs/NavBarMain.js';
import OldMaidGame from './OldMaid/OldMaidGame';

function Main() {
	return (
		<>
			<NavBarMain />
			<Switch>
				<Route path="/old-maid">
					<OldMaidGame />
				</Route>
				<Route path="/work">
					<Work />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);
}

export default Main;