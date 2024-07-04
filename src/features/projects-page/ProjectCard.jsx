function ProjectCard({ project }) {
	return (
		<div
			className="p-10 border-white/30 border-[1px] bg-brand-900/10 rounded-3xl backdrop-blur-sm flex flex-col gap-10"
			// style={{
			// 	backdropFilter: "blur(10px)",
			// 	background: "#00000000",
			// 	// WebkitBackdropFilter: "blur(1px)",
			// }}
		>
			<img src={project.src} className="rounded-2xl" alt={project.name} />

			<h3 className="text-[2.8rem]">
				<span>{project.name}</span>
				<span> - </span>
				<span>{project.description}</span>
			</h3>

			<ul className="flex  self-end mt-auto">
				{project.techStack.map((tool) => (
					<li
						className=" center size-16 -mr-3  bg-brand-900 rounded-full border-gray-700 border"
						key={tool}
					>
						<img src={`/icons/${tool}.png`} className="w-8" alt="" />
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProjectCard;
