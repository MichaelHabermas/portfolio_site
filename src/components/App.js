import React from "react";
import { Switch, Route } from "react-router-dom";

import "../cssFiles/App.css";

import MainRoute from "./MainRoute";
import PersonalInfo from "../components/personalInfo/index";

function App() {
	return (
		<div>
			<Switch>
				<Route path="/personal-info">
					<PersonalInfo />
				</Route>
				<Route path="/">
					<MainRoute />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
