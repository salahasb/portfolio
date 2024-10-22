function ProjectPicture({ project, imageLoaded, setImageLoaded }) {
	return (
		<div
			className={` size-full ${
				!imageLoaded ? "bg-[#2d000c] animate-pulse" : ""
			}  `}
		>
			<img
				loading="lazy"
				onLoad={() => setImageLoaded(true)}
				src={`${project.src}-big.webp`}
				alt={`${project.name} app screenshot`}
				srcSet={`
                ${project.src}-small.webp 510w,
                ${project.src}-medium.webp 760w,
            `}
				// sizes="(max-width: 699px) 510vw, (max-width: 1279px) 760vw, 1200vw"
			/>
		</div>
	);
}

export default ProjectPicture;
