module.exports = {
	siteMetadata: {
		title: `Dawid Stasinski`,
		description: `Dawid Stasinski personal Portfolio`,
		author: `@DawidStasinski`
	},
	plugins: [
		`gatsby-plugin-eslint`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-airtable`,
			options: {
				apiKey: process.env.GATSBY_AIRTABLE_API,
				concurrency: 5,
				tables: [
					{
						baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
						tableName: "portfolio",
					},
					`gatsby-transformer-sharp`,
					`gatsby-plugin-sharp`,
					{
						resolve: `gatsby-plugin-manifest`,
						options: {
							name: `gatsby-starter-default`,
							short_name: `Stasinski`,
							start_url: `/`,
							background_color: `#ccbca9`,
							theme_color: `#ccbca9`,
							display: `minimal-ui`,
							icon: `src/images/gatsby-icon.png`
						}
					}
				]
			}
		},
		`gatsby-plugin-offline`
	]
};
