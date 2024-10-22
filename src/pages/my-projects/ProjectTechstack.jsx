function ProjectTechstack({ project }) {
	return (
		<ul className=" flex @container ">
			{project.techStack.map((tool) => (
				<li
					className={` flex-grow-0 shrink-0 basis-[4.8%]   inline-flex items-center justify-center   aspect-square max-w-[1.8rem]       mr-[-0.25rem] text-[0.2rem]  bg-brand-900  rounded-full bg-no-repeat  border-[#888] bg-contain bg-[50%_50%]   border`}
					key={tool}
					// style={{ backgroundImage: `url('/icons/${tool}.png')` }}
				>
					<img
						src={`/icons/${tool}.png`}
						className="w-[60%]   object-contain   flex-grow-0 shrink-0 basis-[60%] "
						alt={`${tool} library`}
					/>
				</li>
			))}
		</ul>
	);
}

export default ProjectTechstack;