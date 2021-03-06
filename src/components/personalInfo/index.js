import React from "react";
import { Switch, Route } from "react-router-dom";

import "../../cssFiles/App.css";
//components
import MichaelAbout from "./Michael/MichaelPortfolio.js";
import WillAbout from "./Will/WillPortfolio.js";
import AdrianAbout from "./Adrian";
import AndrewAbout from "./Andrew/AndrewPortfolio.js";

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
				<Route path="/personal-info/andrew">
					<AndrewAbout />
				</Route>
			</Switch>
		</div>
	);
}

export default About;
