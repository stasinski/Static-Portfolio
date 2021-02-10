/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Smartphone from "./Smartphone";

interface Props {
	project: Project;
}

const ProjectDetailsBody: React.FC<Props> = ({ project }) => {
	const { title, description, githubLink, link, detailsImages } = project;

	const bodyRef = useRef<HTMLDivElement>(null!);

	useEffect(() => {
		const t1 = gsap.timeline({
			default: {
				duration: 1
			}
		});

		t1.from(bodyRef.current.firstElementChild, {
			delay: 0.5,
			opacity: 0,
			y: -20
		})
			.from(bodyRef.current.childNodes[1], {
				opacity: 0,
				y: -20
			})
			.from(bodyRef.current.lastElementChild, {
				opacity: 0
			});
	});
	return (
		<div className="projectDetails__body">
			<div className="projectDetails__body-image">
				<Smartphone images={detailsImages} />
			</div>
			<div ref={bodyRef} className="projectDetails__body-info">
				<h3>{title}</h3>
				<p>{description}</p>
				<div className="projectDetails__body-infoLinks">
					<a href={link} target="blank">
						Live
					</a>
					<a href={githubLink} target="blank">
						Code
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetailsBody;
