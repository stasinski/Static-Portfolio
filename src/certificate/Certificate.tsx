/* eslint-disable no-unused-vars */
import React from "react";
import Image from "gatsby-image";

interface Props {
	data: any;
}

const Certificate: React.FC<Props> = ({ data }) => {
	const { fluid } = data.data.image.localFiles[0].childImageSharp;
	return (
		<div>
			<Image fluid={fluid} className="certificate-img" />
		</div>
	);
};

export default Certificate;
