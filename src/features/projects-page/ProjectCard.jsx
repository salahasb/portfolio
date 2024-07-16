function ProjectCard({ project }) {
	return (
		<div className="p-6 500:p-8 lg:p-10 border-white/30 border-[1px]  bg-brand-900 rounded-3xl max-h-full flex flex-col  hover:scale-105 transition-transform duration-300  ease-out  ">
			<img
				src={project.src}
				className="rounded-2xl mb-6 500:mb-8 sm:mb-11"
				alt={project.name}
			/>

			<h3 className="mb-9 sm:mb-16    leading-9  425:leading-snug  text-[2.2rem]   xl:text-[2.8rem]">
				<span className="font-semibold  ">{project.name}</span>
				<span> - </span>
				<span className="text-[2rem] xl:text-[2.4rem] ">
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
