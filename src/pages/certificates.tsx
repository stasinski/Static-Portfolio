/* eslint-disable no-unused-vars */
import { graphql, Link } from "gatsby";
import * as React from "react";
import Certificate from "../certificate/Certificate";
import SEO from "../components/seo";

interface Props {
	data: any;
}

const Certificates: React.FC<Props> = ({ data }) => {
	const {
		allFile: { nodes }
	} = data;
	return (
		<>
			<SEO />
			<div className="certificates">
				<Link className="certificates-nav" to="/">
					Dawid Stasiński
				</Link>
				<div className="certificates-list">
					{nodes.map((node: any, index: number) => (
						<Certificate image={node} key={index} />
					))}
				</div>
			</div>
		</>
	);
};

export const query = graphql`
	{
		allFile(
			filter: {
				dir: {
					eq: "C:/Users/Legion/Desktop/programowanie/gatsby-portfolio/src/images/certificates"
				}
			}
		) {
			nodes {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;

export default Certificates;
