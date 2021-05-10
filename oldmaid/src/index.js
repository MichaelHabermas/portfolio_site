import React from 'react';
import ReactDOM from 'react-dom';
import './cssFiles/index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
	<ParallaxProvider>
		<Router>
			<App />
		</Router>
	</ParallaxProvider>,
	document.getElementById('root')
);
