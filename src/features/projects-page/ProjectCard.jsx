function ProjectCard({ project }) {
	return (
		<div className="p-6 500:p-8 lg:p-10 border-white/30 border-[1px]  bg-brand-900 rounded-3xl max-h-full flex flex-col basis-[70%]  lg:basis-[60%]   1220:basis-[50%] 2xl:basis-[38%]  grow shrink-0 ">
			<img
				src={project.src}
				className="rounded-2xl mb-6 500:mb-8 sm:mb-11"
				alt={project.name}
			/>

			<h3 className="mb-9 sm:mb-16  text-[2rem] leading-9 500:leading-snug 500:text-[2.2rem] sm:text-[2.6rem] lg:text-[2.8rem]">
				<span className="font-semibold  ">{project.name}</span>
				<span> - </span>
				<span className="text-[1.8rem] 500:text-[2rem] sm:text-[2.4rem]">
					{project.description}
				</span>
			</h3>

			<ul className="flex self-start  mt-auto ">
				{project.techStack.map((tool) => (
					<li
						className=" center p-3 -mr-3  bg-brand-900 rounded-full border-gray-700 border"
						key={tool}
					>
						<img src={`/icons/${tool}.png`} className="w-5 sm:w-8" alt="" />
					</li>
				))}
			</ul>
		</div>
	);
}

export default ProjectCard;
