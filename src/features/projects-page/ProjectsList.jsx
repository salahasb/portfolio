import ProjectCard from "./ProjectCard";

const projects = [
	{
		name: "Forkify",
		description: "recipe finder",
		src: "/projects/forkify",
		techStack: ["react-router", "redux"],
	},
	{
		name: "The Wild Oasis",
		description: "hotel manager",
		src: "/projects/the-wild-oasis",
		techStack: [
			"styled-components",
			"react-router",
			"supabase",
			"react-query",
			"react-hook-form",
		],
	},
	{
		name: "WorldWise",
		description: "travel tracker",
		src: "/projects/worldwise",
		techStack: ["leaflet", "react-router"],
	},
];

function ProjectsSlider() {
	return (
		<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  md:gap-x-5 lg:gap-14 425:max-sm:w-[80%] max-w-[150rem] w-full">
			{projects.map((project, i) => (
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
