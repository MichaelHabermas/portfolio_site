import React from "react";
import styled from "styled-components";

const ProjectCardStyle = styled.div``;

const ProjectCard = props => {
	const { image, text, icons } = props;
	return (
		<ProjectCardStyle>
			<img></img>
			<p>{text}</p>
			<div>
				{icons.map(icon => {
					return (
						<>
							<h4>Hi</h4>
						</>
					);
				})}
			</div>
		</ProjectCardStyle>
	);
};

export default ProjectCard;
