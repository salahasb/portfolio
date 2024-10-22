import { useState } from "react";

function ProjectPicture({ project, imageLoaded, setImageLoaded }) {
	return (
		<div
			className={` size-full ${
				!imageLoaded ? "bg-[#25000a] animate-pulse" : ""
			}  `}
		>
			<img
				loading="lazy"
				onLoad={() => setImageLoaded(true)}
				// className="opacity-95"
				src={`${project.src}-big.webp`}
				alt={`${project.name} app screenshot`}
				srcSet={`
                ${project.src}-small.webp 510w,
                ${project.src}-medium.webp 760w,
                ${project.src}-big.webp 1200w

            `}
			/>
		</div>
	);
}

export default ProjectPicture;
