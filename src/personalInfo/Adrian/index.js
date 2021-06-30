import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdrianNav from './AdrianNav';
import AdrianAbout from './AdrianAbout';
import CharDesign from './AdrianCharDesign';

const Adrian = () => {
	return (
		<div>
			<AdrianNav />
			<Switch>
				<Route path="/personal-info/adrian/characterdesign">
					<CharDesign />
				</Route>
				<Route path="/personal-info/adrian">
					<AdrianAbout />
				</Route>
			</Switch>
		</div>
	);
};

export default Adrian;
