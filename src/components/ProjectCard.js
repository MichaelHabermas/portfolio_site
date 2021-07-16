import React from "react";
import styled from "styled-components";

const ProjectCardStyle = styled.div`
	.project_div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgba(196, 196, 196, 0.3);
		border-radius: 20px;
		box-shadow: 6px 6px 10px rgba(122, 122, 122, 0.5);
		margin-bottom: 3rem;
	}

	img {
		width: 100%;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.5rem;
		width: 90%;
		margin: 0 auto;
		color: #2e2828;
		opacity: 1;
	}

	.project_icons {
		display: flex;
		flex-wrap: wrap;
	}

	@media screen and (min-width: 480px) {
		color: blue;
	}
	@media screen and (min-width: 768px) {
		color: red;
	}
	@media screen and (min-width: 1024px) {
		color: blue;
	}
	@media screen and (min-width: 1200px) {
		color: red;
	}
	@media screen and (min-width: 1550px) {
		color: blue;
	}
`;

const ProjectCard = props => {
	const { image, text, icons } = props;
	return (
		<ProjectCardStyle>
			<div className="project_div">
				<img src={image} alt="project_image"></img>
				<p>{text}</p>
				<div className="project_icons">
					{icons.map(icon => {
						return (
							<div>
								<h4>Hi</h4>
							</div>
						);
					})}
				</div>
			</div>
		</ProjectCardStyle>
	);
};

export default ProjectCard;
