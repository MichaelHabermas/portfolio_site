import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';

import About from './about';
import Projects from './projects';

const Mpage = styled.div`
	position: absolute;
	width: 100%;
    height: 100%;
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0%;
		box-sizing: border-box;
		z-index: 1;
		color: white;
		list-style: none;
		text-decoration: none;
	}

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2%;
        font-family: 'Poppins', sans-serif;
    }

    nav h2 {
        font-family: 'Lobster', cursive;
        font-weight: 1;
        margin-left: 3.5%;
    }

    nav ul {
        display: flex;
        justify-content: space-around;
        width: 40%;
    }

`

const Michael = () => {


    return (
        <Mpage>
            <nav>
                <h2>Michael Habermas</h2>
                <ul>
                    <li>
                        <Link to='/about/michael/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/about/michael'>Contacts</Link>
                        {/* make email links */}
                    </li>
                    <li>
                        <Link to='/'>Back to Main</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path='/about/michael/projects'>
                    <Projects />
                </Route>
                <Route path='/about/michael'>
                    <About />
                </Route>
            </Switch>
        </Mpage>
    )
}

export default Michael