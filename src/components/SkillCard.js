import React from "react";
import styled from "styled-components";

const SkillCardStyle = styled.div``;

const SkillCard = props => {
	const { icon, iconName } = props;
	return (
		<SkillCardStyle>
			<div className="skill_card">
				<icon className="icon" />
				<h4>{iconName}</h4>
			</div>
		</SkillCardStyle>
	);
};

export default SkillCard;
