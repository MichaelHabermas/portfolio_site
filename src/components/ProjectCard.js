import React from "react";
import styled from "styled-components";

const ProjectCardStyle = styled.div``;

const ProjectCard = props => {
	const { image } = props;
	return (
		<ProjectCardStyle>
			<img></img>
			<p></p>
		</ProjectCardStyle>
	);
};

export default ProjectCard;
