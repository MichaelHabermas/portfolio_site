import React from "react";
import styled from "styled-components";

import Nav from "../../personal_info_2/about_us_nav";

//assets
import backgroundChavaMobile from "../../../assets/andrewPage/background_chava_mobile.png";
// import backgroundLostMobile from "../../../assets/andrewPage/background_lost_mobile.png";
// import backgroundLostMobile2 from "../../../assets/andrewPage/background_lost_mobile2.png";
import cvLink from "../../../assets/resumes/william_moon_resume.pdf";

const AndrewPortfolioStyles = styled.div`
	html {
		scroll-behavior: smooth;
		scroll-padding-top: 5rem;
	}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
		font-size: 1.5rem;
	}

	// LANDING PAGE SECTION											LANDING
	.landing {
		background-image: url(${backgroundChavaMobile});
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		-webkit-background-size: cover;
		height: 100vh;
		color: white;
		/* this is so the background sizing works properly for iOS mobile Safari */
		@supports not (-webkit-overflow-scrolling: touch) {
			background-attachment: fixed;
		}
	}
`;

function AndrewPortfolio() {

   // const contactInfo = [
	// 	{ iconName: "GitHub", location: "https://github.com/willmoon19" },
	// 	{
	// 		iconName: "LinkedIn",
	// 		location: "https://www.linkedin.com/in/william-d-moon/",
	// 	},
	// 	{ iconName: "CV", location: `${cvLink}` },
	// 	{ iconName: "Twitter", location: "" },
	// 	{ iconName: "Email", location: "mailto:wmoon0113@gmail.com" }, 
	// ];


   return (
		<AndrewPortfolioStyles>
			<section className="landing">
				<Nav name="Andrew Sprague" cvLink={`${cvLink}`} color="white" />
					<div className="sub_section">

					</div>
			</section>
		</AndrewPortfolioStyles>
   );
}

export default AndrewPortfolio;