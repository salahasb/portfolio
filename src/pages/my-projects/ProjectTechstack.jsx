function ProjectTechstack({ project }) {
	return (
		<ul className="flex  @container ">
			{project.techStack.map((tool) => (
				<li
					className={`   size-[4.8%] aspect-square max-w-[1.8rem]       mr-[-0.25rem] text-[0.2rem]  bg-brand-900  rounded-full bg-no-repeat  border-[#888] bg-[length:50%] bg-[50%_50%] border`}
					key={tool}
					style={{ backgroundImage: `url('/icons/${tool}.png')` }}
				>
					{/* <img
									src={`/icons/${tool}.png`}
									className="w-[60%] object-contain  "
									alt={`${tool} library`}
								/> */}
				</li>
			))}
		</ul>
	);
}

export default ProjectTechstack;
