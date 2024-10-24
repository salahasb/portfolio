import { useState } from "react";

function ProjectPicture({ project }) {
	const [imageLoaded, setImageLoaded] = useState(false);

	// Styles
	const imageContainerClasses = `overflow-hidden rounded-[15px] sm:rounded-[20px]   md:rounded-[30px] lg:rounded-[40px] aspect-video ${
		!imageLoaded ? "bg-[#2d000c] animate-pulse" : ""
	} `;

	return (
		<div className={imageContainerClasses}>
			<img
				src={`${project.name.toLowerCase().replace(" ", "")}-big.webp`}
				alt={`${project.name} app screenshot`}
				loading="lazy"
				onLoad={() => setImageLoaded(true)}
				srcSet={`
                    ${project.src}-small.webp 510w,
                    ${project.src}-medium.webp 760w,
                    ${project.src}-big.webp 1020w
                `}
			/>
		</div>
	);
}

export default ProjectPicture;
