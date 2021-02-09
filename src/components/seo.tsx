/* eslint-disable no-unused-vars */

import * as React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
	const {
		site: {
			siteMetadata: { title, author, description }
		}
	} = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
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
			meta={[
				{
					name: `description`,
					content: description
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: description
				},
				{
					property: `og:type`,
					content: `website`
				},
				{
					name: `twitter:card`,
					content: `summary`
				},
				{
					name: `twitter:creator`,
					content: author
				},
				{
					name: `twitter:title`,
					content: title
				},
				{
					name: `twitter:description`,
					content: description
				}
			]}
		/>
	);
};

export default SEO;
