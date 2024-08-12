import ProjectCard from "./ProjectCard";
import { myProjects } from "./../../utils/constants";

function ProjectsSlider() {
	return (
		<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  md:gap-x-5 lg:gap-14 425:max-sm:w-[80%] max-w-[150rem] w-full">
			{myProjects.map((project, i) => (
				<ProjectCard
					project={project}
					key={project.name}
					style={{
						opacity: 0,
						animation: `fadeIn-translateUp 1s 0.${i * 2}s  forwards`,
					}}
				/>
			))}
		</div>
	);
}

export default ProjectsSlider;
