/* eslint-disable no-unused-vars */
import React from "react";
import Image from "gatsby-image";

interface Props {
	image: any;
}

const Certificate: React.FC<Props> = ({ image }) => {
	const { fluid } = image.childImageSharp;
	return (
		<div>
			<Image fluid={fluid} className="certificate-img" />
		</div>
	);
};

export default Certificate;
