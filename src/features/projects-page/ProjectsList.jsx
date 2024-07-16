import ProjectCard from "./ProjectCard";

const projects = [
	{
		name: "Forkify",
		description: "recipe finder",
		src: "/projects/forkify.png",
		techStack: ["react-router", "redux"],
	},
	{
		name: "The wild oasis",
		description: "hotel manager",
		src: "/projects/the-wild-oasis.png",
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
		src: "/projects/the-world-wise.png",
		techStack: ["leaflet", "react-router"],
	},
];

function ProjectsSlider() {
	return (
		<div className=" grid grid-cols-1 500:grid-cols-2 md:grid-cols-3   500:gap-8 gap-y-10 2xl:gap-14 max-w-[150rem]">
			{projects.map((project) => (
				<ProjectCard project={project} key={project.name} />
			))}
		</div>
	);
}

export default ProjectsSlider;
