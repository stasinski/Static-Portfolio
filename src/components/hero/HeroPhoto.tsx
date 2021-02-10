/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap, Power4 } from "gsap";
import HeroPhotoDialog from "./HeroPhotoDialog";

const query = graphql`
	{
		allFile(filter: { relativePath: { eq: "HeroImage.svg" } }) {
			nodes {
				publicURL
			}
		}
	}
`;

const HeroPhoto: React.FC = () => {
	let imageRef = useRef<HTMLHeadingElement | null>(null);

	const {
		allFile: { nodes }
	} = useStaticQuery(query);
	const { publicURL } = nodes[0];

	useEffect(() => {
		if (imageRef.current) {
			gsap.to(imageRef.current, {
				visibility: "visible"
			});
			gsap.to(imageRef.current.lastElementChild, {
				visibility: "visible",
				delay: 2
			});

			gsap.from(imageRef.current.firstElementChild, {
				duration: 4,
				opacity: 0,
				ease: Power4.easeIn,
				transformOrigin: "top left"
			});
			gsap.from(imageRef.current.lastElementChild, {
				duration: 2,
				delay: 2,
				opacity: 0,
				ease: Power4.easeOut
			});
		}
	}, []);

	return (
		<div ref={imageRef} className="hero-imageBox">
			<img
				loading="lazy"
				className="hero-image"
				src={publicURL}
				alt="profilImage"
			/>
			<HeroPhotoDialog />
		</div>
	);
};

export default HeroPhoto;
