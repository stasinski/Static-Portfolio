interface Project {
	title: string;
	description: string;
	link: string;
	githubLink: string;
	image: {
		base64: string;
		aspectRatio: number;
		src: string;
		srcSet: string;
		srcSetType: string;
		sizes: string;
		originalImg: string;
	};
	detailsImages:DetailsImages
}

type DetailsImages =  Array<{
	childImageSharp: {
		fluid: {
			base64: string;
			aspectRatio: number;
			src: string;
			srcSet: string;
			srcSetType: string;
			sizes: string;
			originalImg: string;
		};
	};
}>;
