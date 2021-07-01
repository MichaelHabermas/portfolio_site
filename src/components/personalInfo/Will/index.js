import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WillNav from './WillNav';
import WillAbout from './WillAbout';
import Projects from './WillProjects';

const Will = () => {
	return (
		<div>
			<WillNav />
			<Switch>
				<Route path="/personal-info/Will/projects">
					<Projects />
				</Route>
				<Route path="/personal-info/Will">
					<WillAbout />
				</Route>
			</Switch>
		</div>
	);
};

export default Will;
