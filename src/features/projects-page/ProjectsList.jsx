import ProjectCard from "./ProjectCard";

const projects = [
	{
		name: "Forkify",
		description: "recipe finder",
		src: "/projects/forkify.webp",
		techStack: ["react-router", "redux"],
	},
	{
		name: "The wild oasis",
		description: "hotel manager",
		src: "/projects/the-wild-oasis.webp",
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
		src: "/projects/the-world-wise.webp",
		techStack: ["leaflet", "react-router"],
	},
];

function ProjectsSlider() {
	return (
		<div className=" grid grid-cols-1 500:grid-cols-2 md:grid-cols-3 500:gap-8 gap-y-10 2xl:gap-14 max-500:w-[80%] max-w-[150rem]">
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
