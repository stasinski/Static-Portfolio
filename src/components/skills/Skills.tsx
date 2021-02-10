/* eslint-disable no-unused-vars */

import React from "react";
import Skill from "./Skill";
import { graphql, useStaticQuery } from "gatsby";

interface SkillTypes {
	name: string;
	icon: string;
}

const SkillsComp: React.FC = () => {
	const {
		allAirtable: { nodes }
	} = useStaticQuery(query);

	const skills: SkillTypes[] = nodes.map(({ data }: any) => {
		return {
			name: data.name,
			icon: data.icon[0].url
		};
	});

	const renderedSkills = skills.map((skill, index) => (
		<Skill key={index} img={skill.icon} name={skill.name} />
	));

	return (
		<section className="tech">
			<div className="tech__center">
				<div className="tech-title">
					<h2>Skills</h2>
				</div>
				<div className="tech__context">{renderedSkills}</div>
			</div>
		</section>
	);
};

const query = graphql`
	{
		allAirtable(
			filter: { table: { eq: "skills" } }
			sort: { fields: data___id }
		) {
			nodes {
				data {
					name
					id
					icon {
						url
					}
				}
			}
		}
	}
`;

export default SkillsComp;
