import React from 'react';
import ReactDOM from 'react-dom';
import './cssFiles/index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
	<Provider store={store}>
		<ParallaxProvider>
			<Router>
				<App />
			</Router>
		</ParallaxProvider>
	</Provider>,
	document.getElementById('root')
);
