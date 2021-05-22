import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import styled from 'styled-components';

import '../cssFiles/App.css';
//components
import Home from './Home.js';
import Work from './Work.js';
import NavBarMain from '../Navs/NavBarMain.js';
import OldMaidGame from './OldMaid/OldMaidGame';

//	color scheme and gradients (see image in assets for reference)
//	#E8A49c		linear-gradient(145deg, #E8A49c, #f04393); 1-4
//	#3c4cad		  linear-gradient(145deg,, #3c4cad, #f04393);	2-4
//	#240e8b	      linear-gradient(145deg, #240e8b, #3c4cad);	3-2
//	#f04393		  linear-gradient(145deg, #f04393, #f9c449);	4-5
//	#f9c449		  linear-gradient(145deg, #f9c449, #E8A49c);	5-1

function App() {
	return (
		<>
			<NavBarMain />
			<Switch>
				<Route path="/old-maid">
					<OldMaidGame />
				</Route>
				{/* <Route path="/">
					<About />
				</Route> */}
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

export default App;
