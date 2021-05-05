import React from 'react';
import '../cssFiles/App.css';
import styled, { createGlobalStyle } from 'styled-components';

// add the below to the index.js head
// <link rel="preconnect" href="https://fonts.gstatic.com" />
// <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap" rel="stylesheet" />

const GlobalStyles = createGlobalStyle`
  html {
    --clr-neon: hsl(317 100% 54%);
	--clr-bg: hsl(323 21% 16%);
  }

  	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`;

const NeonSignStyle = styled.div`
	min-height: 100vh;
	display: grid;
	place-items: center;
	background: var(--clr-bg);
	font-family: 'Balsamiq Sans', cursive;
	color: var(--clr-neon);
	padding-right: 10rem;

	.neon-button {
		font-size: 4rem;
		display: inline-block;
		cursor: pointer;
		text-decoration: none;
		color: var(--clr-neon);
		border: var(--clr-neon) 0.125em solid;
		padding: 0.25em 1em;
		border-radius: 0.25em;
		text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
		box-shadow: inset 0 0 0.5em 0 var(--clr-neon), 0 0 0.5em 0 var(--clr-neon);
		position: relative;
	}

	.neon-button::before {
		pointer-events: none;
		content: '';
		position: absolute;
		background: var(--clr-neon);
		top: 120%;
		left: 0;
		width: 100%;
		height: 100%;

		transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
		filter: blur(1em);
		opacity: 0.7;
	}

	.neon-button::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 0 0 2em 0.5em var(--clr-neon);
		opacity: 0;
		background-color: var(--clr-neon);
		z-index: -1;
		transition: opacity 100ms linear;
	}

	.neon-button:hover,
	.neon-button:focus {
		color: var(--clr-bg);
		background-color: var(--clr-neon);
		text-shadow: none;
	}

	.neon-button:hover::before,
	.neon-button:focus::before {
		opacity: 1;
	}
	.neon-button:hover::after,
	.neon-button:focus::after {
		opacity: 1;
	}
`;

export default function App2() {
	return (
		<>
			<GlobalStyles />
			<NeonSignStyle>
				<a href="www.google.com" className="neon-button">
					Neon{' '}
				</a>
			</NeonSignStyle>
		</>
	);
}