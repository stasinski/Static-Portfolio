/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

interface Props {
	project: Project;
}

const Project: React.FC<Props> = ({ project }) => {
	const { title, image } = project;
	const [showDetails, setShowDetail] = useState(false);
	const [originPos, setOriginPos] = useState<{ x: Number; y: Number } | null>(
		null
	);

	const clickHandle: Function = (e: MouseEvent) => {
		setOriginPos({ x: e.clientX, y: e.clientY });
		setShowDetail(true);
	};

	return <>
        <article className="project" onClick={e => clickHandle(e)}>
            <div className="project__center">
                <GatsbyImage image={image} loading="lazy" className="project-image" alt="" />
                <div className="project__info">
                    <div>
                        <h3 className="project__info-text">{title}</h3>
                        <h4 className="project__info-subtext">Show More</h4>
                    </div>
                </div>
            </div>
        </article>
        {showDetails && (
            <ProjectDetails
                project={project}
                closeModal={() => setShowDetail(false)}
                originPosition={originPos || null}
            />
        )}
    </>;
};

export default Project;
