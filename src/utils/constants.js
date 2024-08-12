export const routes = ["/", "/projects", "/about-me"];
export const myProjects = [
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
