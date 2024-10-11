import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center relative py-4 w-full">
			<div className="flex w-full max-w-xs mx-auto items-center justify-around">
				<a
					href="https://www.github.com/BenedictaUche"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github
						className="text-xl text-lightGrey hover:text-lightGreen"
					/>
				</a>

				<a
					href="https://www.twitter.com/Benny_dicta1"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Twitter
						className="text-xl text-lightGrey hover:text-lightGreen"
					/>
				</a>

				<a
					href="https://linkedin.com/in/benedictaonyebuchi/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Linkedin
						className="text-xl text-lightGrey hover:text-lightGreen"
					/>
				</a>
			</div>

			<div className="w-full text-center mt-4 max-w-xs mx-auto">
				<a
					href="https://www.github.com/BenedictaUche/my-portfolio"
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-lightGrey hover:text-lightGreen"
				>
					Built by Benedicta Onyebuchi
				</a>
			</div>
		</div>
	);
};

export default Footer;
