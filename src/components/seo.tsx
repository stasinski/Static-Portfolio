/* eslint-disable no-unused-vars */

import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
	const {
		site: {
			siteMetadata: { title, description }
		},
		allFile:{nodes},
		portfolio:{nodes:portfolio}
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
				allFile(filter: { relativePath: { eq: "logo.png" } }) {
					nodes {
						publicURL
					}
				}
				portfolio :allFile(filter: { relativePath: { eq: "portfolio.webp" } }) {
					nodes {
						publicURL
					}
				}
			}
		`
	);

	return (
		<Helmet
			htmlAttributes={{
				lang: "en"
			}}
			title={title}
		>
			<link rel="icon" href={nodes[0].publicURL} type="image/x-icon" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#000000" />
			<meta name="description" content={description} />
			<meta name="tags" content="Dawid Stasiński,Dawid-Stasiński,Stasiński" />
			<meta
				name="keywords"
				content="Dawid Stasiński,Dawid-Stasiński,Stasiński"
			/>
			<meta name="author" content="Dawid Stasinski" />
			<meta property="og:title" content={title} />
			<meta property="og:image" content={portfolio} />
			<meta property="og:url" content="www.dawid-stasinski.me" />
			<meta property="og:type" content="website" />
			<meta property="twitter:card" content="summary" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
		</Helmet>
	);
};

export default SEO;
