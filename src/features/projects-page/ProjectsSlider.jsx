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
		description: "internal hotel system",
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
		techStack: ["leaflet", "react-router", "appwrite"],
	},
];

function ProjectsSlider() {
	return (
		<div className="flex gap-16 mt-[10rem]">
			{projects.map((project) => (
				<ProjectCard project={project} key={project.name} />
			))}
		</div>
	);
}

export default ProjectsSlider;
