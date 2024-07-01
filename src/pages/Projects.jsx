import { useEffect } from "react";

function Projects({ className, setAnimateEnd }) {
	return (
		<h1
			className={`text-[4rem] absolute top-0 left-0 animate-[fadeIn_1s_forwards]  opacity-0 ${className}`}
		>
			Projects
		</h1>
	);
}

export default Projects;
