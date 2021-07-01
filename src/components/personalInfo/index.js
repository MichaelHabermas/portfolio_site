import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../../cssFiles/App.css';
//components
import MichaelAbout from './Michael';
import WillAbout from './Will';
import AdrianAbout from './Adrian';

function About() {
	return (
		<div>
			<Switch>
				<Route path="/personal-info/michael">
					<MichaelAbout />
				</Route>
				<Route path="/personal-info/will">
					<WillAbout />
				</Route>
				<Route path="/personal-info/adrian">
					<AdrianAbout />
				</Route>
			</Switch>
		</div>
	);
}

export default About;
