function ProjectPicture({ project }) {
	return (
		<img
			src={`${project.src}-big.webp`}
			alt={`${project.name} app screenshot`}
			srcSet={`
                ${project.src}-small.webp 510w,
                ${project.src}-medium.webp 760w,
                ${project.src}-big.webp 1200w

            `}
		/>
	);
}

export default ProjectPicture;
