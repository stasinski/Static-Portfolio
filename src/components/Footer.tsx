/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { usePopper } from "react-popper";

const Footer: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const referenceElement = useRef<HTMLButtonElement>(null);
	const popperElement = useRef<HTMLDivElement>(null);
	const arrowElement = useRef<HTMLDivElement>(null);
	const { styles, attributes } = usePopper(
		referenceElement.current,
		popperElement.current,
		{
			modifiers: [
				{
					name: "arrow",
					options: {
						element: arrowElement.current
					}
				},
				{
					name: "offset",
					options: {
						offset: [0, -60]
					}
				}
			]
		}
	);

	const emailClickHandler = () => {
		navigator.clipboard.writeText("stasinski01@gmail.com");
		setOpen(true);
		setTimeout(() => {
			setOpen(false);
		}, 3000);
	};

	return (
		<footer className="footer">
			<div className="footer__center">
				<div className="footer-left"></div>
				<div className="footer-right">
					<h3> Contact:</h3>

					<button
						ref={referenceElement}
						onClick={emailClickHandler}
						className="footer-right-email"
					>
						stasinski01@gmail.com
						<span className="footer-right-email-icon">
							<HiOutlineClipboardCopy />
						</span>
					</button>

					<div
						onClick={() => setOpen(false)}
						className="footer-right-copyInfo"
						ref={popperElement}
						style={styles.popper}
						{...attributes.popper}
					>
						{open ? <h4>Copied To Clipboard</h4> : ""}
						<div ref={arrowElement} style={styles.arrow} />
					</div>

					<div className="footer-right-links">
						<a
							href="https://github.com/StasinskiPL"
							aria-label="Github"
							target="blank"
						>
							<AiOutlineGithub className="footer-right-link" />
						</a>
						<a
							href="https://www.facebook.com/dawid.stasinski.585"
							aria-label="Facebook"
							target="blank"
						>
							<FaFacebook className="footer-right-link" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
