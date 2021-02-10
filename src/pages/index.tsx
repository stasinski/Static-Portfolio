/* eslint-disable no-unused-vars */
import * as React from "react";
import Footer from "../components/Footer";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import SEO from "../components/seo";
import Skills from "../components/skills/Skills";

const IndexPage: React.FC = () => (
	<>
		<SEO/>
		<Hero/>
		<Projects/>
		<Skills/>
		<Footer/>
	</>
);

export default IndexPage;
