import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../cssFiles/App.css';
//components
import MichaelAbout from './Michael';
import Will from './Will';
import Adrian from './Adrian';



function About() {
	return (
		<>
            <Switch>
			    <Route path='/personal-info/michael'>
			        <MichaelAbout />
			    </Route>
			    <Route path='/personal-info/will'>
			        <Will />
			    </Route>
			    <Route path='/personal-info/adrian'>
			        <Adrian />
			    </Route>
            </Switch>
		</>
	);
}

export default About;