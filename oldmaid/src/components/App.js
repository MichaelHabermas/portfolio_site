import React from 'react';
// import styled from 'styled-components';

import '../cssFiles/App.css';
//components
import NavBarMain from './NavBarMain.js';
import OldMaidGame from './OldMaidGame.js';

function App() {
	return (
		<>
			<NavBarMain />
			<OldMaidGame />
		</>
	);
}

export default App;
