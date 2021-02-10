/* eslint-disable no-unused-vars */
import React from "react";

const Skill: React.FC<{ name: string; img: string }> = ({ img, name }) => {
	return (
		<div className="skill">
			<div className="skill__center">
				<img className="skill-img" src={img} alt={name} />
				<h2 className="skill-name">{name}</h2>
			</div>
		</div>
	);
};

export default Skill;
