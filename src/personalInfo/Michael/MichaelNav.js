import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        // padding: 2%;
        font-family: 'Poppins', sans-serif;
        position: absolute;
        top: 5%;
        right: 5%;
        width: 90%;
        // border: 1px solid yellow;
        font-size: 1.5rem;
    }

    nav h2 {
        font-family: 'Lobster', cursive;
        font-weight: 1;
    }

    nav ul {
        display: flex;
        justify-content: space-between;
        width: 30%;
        font-size: 1.5rem;
    }

`

const MichaelNav = () => {


    return (
        <Mpage>
            <nav>
                <h2>Michael Habermas</h2>
                <ul>
                    <li>
                        <Link to='/personal-info/michael/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/personal-info/michael'>Contacts</Link>
                        {/* make email links */}
                    </li>
                    <li>
                        <Link to='/'>Back to Main</Link>
                    </li>
                </ul>
            </nav>
        </Mpage>
    )
}

export default MichaelNav