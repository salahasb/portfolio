import { useState } from "react";

function Projects1({ className, setIsAnimating }) {
	// const [isAnimating, setIsAnimating] = useState(true);

	return (
		<div
			onAnimationEnd={(e) => {
				if (e.animationName === "fadeOut") setIsAnimating(false);
			}}
			// onAnimationEnd={(e) => {
			// 	if (e.animationName === "fadeOut")
			// 		// setToggle((t) => !t);
			// 		setIsAnimating(false);
			// }}
			className={`absolute  opacity-0 animate-[fadeIn_2s_forwards] ${className}`}
		>
			projects
		</div>
	);
}

export default Projects1;
