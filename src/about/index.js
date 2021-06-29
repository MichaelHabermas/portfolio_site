import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../cssFiles/App.css';
//components
import Michael from './Michael';
import Will from './Will';
import Adrian from './Adrian';



function About() {
	return (
		<>
            <Switch>
			    <Route path='/about/michael'>
			        <Michael />
			    </Route>
			    <Route path='/about/will'>
			        <Will />
			    </Route>
			    <Route path='/about/adrian'>
			        <Adrian />
			    </Route>
            </Switch>
		</>
	);
}

export default About;