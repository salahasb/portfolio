function ProjectItemTitle({ project }) {
	return (
		<div className=" ">
			<h3 className={`mb-[0.8cqw] tracking-wide      text-[5.8cqi]    `}>
				<span className="  font-semibold  ">{project.name}</span>

				<span className="text-[3.8cqi] uppercase">
					{" "}
					- {project.description}
				</span>
			</h3>
		</div>
	);
}

export default ProjectItemTitle;
