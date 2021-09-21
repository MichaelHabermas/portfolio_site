import React from "react";
import styled from "styled-components";

import Nav from "../../personal_info_2/about_us_nav";

import cvLink from "../../../assets/resumes/william_moon_resume.pdf";

const AndrewPortfolioStyles = styled.div`

`

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
						<div>
							<h1>Hi, I'm Will</h1>
							<p className="landing_p">
								A Software Engineer with a passion for coding. Having built web
								applications, I have experience with JavaScript, React, NodeJS,
								Python plus a few other libraries and frameworks.
							</p>
						</div>
					</div>
			</section>
		</AndrewPortfolioStyles>
   );
}

export default AndrewPortfolio;