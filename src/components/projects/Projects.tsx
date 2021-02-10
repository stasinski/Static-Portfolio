/* eslint-disable no-unused-vars */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Project from "./Project";

const Projects: React.FC = () => {
	const {
		allAirtable: { nodes }
	} = useStaticQuery(query);

	const projectsList: Project[] = nodes.map(({ data }: any) => {
		return {
			title: data.title,
			description: data.description,
			link: data.sitelink,
			githubLink: data.codelink,
			image: data.mainimage.localFiles[0].childImageSharp.fluid,
			detailsImages: data.images.localFiles
		};
	});

	const renderProjects = projectsList.map((project, index) => (
		<Project key={index} project={project} />
	));

	return (
		<section className="projects" >
			<div className="projects__center" id="projects">
				<div className="projects-title">
					<h2>Projects</h2>
				</div>
				<div className="projects__context">{renderProjects}</div>
			</div>
		</section>
	);
};

const query = graphql`
	{
		allAirtable(filter: {table: {eq: "projects"}}, sort: {fields: data___id}) {
			nodes {
				data {
					codelink
					description
					title
					sitelink
					images {
						localFiles {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					mainimage {
						localFiles {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;

export default Projects;
