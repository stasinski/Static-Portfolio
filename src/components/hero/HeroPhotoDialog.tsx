/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
	{
		allAirtable(
			filter: { table: { eq: "about" } }
			sort: { order: ASC, fields: data___id }
		) {
			nodes {
				data {
					text
				}
			}
		}
	}
`;

const HeroPhotoDialog = () => {
	const [showAbout, setshowAbout] = useState<boolean>(false);
	const [aboutText, setAboutText] = useState<string>("");
	let dialogue = useRef<HTMLHeadingElement | null>(null);
	let circle1 = useRef<HTMLHeadingElement | null>(null);
	let circle2 = useRef<HTMLHeadingElement | null>(null);
	let btnRef = useRef<HTMLButtonElement | null>(null);

	const {
		allAirtable: { nodes }
	} = useStaticQuery(query);

	useEffect(() => {
		let interval: any;
		if (showAbout) {
			let i = 0;
			interval = setInterval(() => {
				i++;
				const text = nodes[0].data.text.substring(0, i);
				setAboutText(text);
				if (i === nodes[0].data.text.length + 15) {
					i = 0;
					setAboutText("");
				}
			}, 60);
		}
		return () => clearInterval(interval);
	}, [showAbout]);

	const clickHandler = () => {
		window.scrollTo(0, 0);
		gsap.to(dialogue.current, {
			visibility: "visible"
		});
		if (dialogue.current) {
			gsap.to(circle2.current, {
				opacity: 1,
				duration: 0.5,
				scale: 1
			});
			gsap.to(circle1.current, {
				opacity: 1,
				duration: 0.5,
				delay: 0.5,
				scale: 1
			});
			gsap
				.to(dialogue.current.firstElementChild, {
					opacity: 1,
					duration: 0.5,
					delay: 1
				})
				.then(() => {
					setshowAbout(true);
				});
			gsap.to(btnRef.current, {
				opacity: 1,
				duration: 0.5,
				delay: 2.5
			});
		}
	};

	const closeHandler = () => {
		document.getElementById("projects")?.scrollIntoView();
		if (dialogue.current) {
			gsap.to(circle2.current, {
				opacity: 0,
				duration: 0.5
			});
			gsap.to(circle1.current, {
				opacity: 0,
				duration: 0.5
			});
			gsap.to(btnRef.current, {
				opacity: 0,
				duration: 0.5
			});
			gsap
				.to(dialogue.current.firstElementChild, {
					opacity: 0,
					duration: 0.5
				})
				.then(() => {
					setshowAbout(false);
					setAboutText("");
				});
		}

		gsap.to(dialogue.current, {
			visibility: "hidden",
			delay: 0.5
		});
	};

	return (
		<>
			<div ref={dialogue} className="about">
				<div className="about-context">
					<p>{aboutText}</p>
					<button
						ref={btnRef}
						onClick={closeHandler}
						className="about-context-btn"
					>
						ok
					</button>
				</div>
				<div ref={circle1} className="circle1"></div>
				<div ref={circle2} className="circle2"></div>
			</div>
			<button onClick={clickHandler} className="hero-image-btn">
				About Me
			</button>
		</>
	);
};

export default HeroPhotoDialog;
