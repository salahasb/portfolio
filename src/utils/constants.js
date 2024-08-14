import About from "../pages/about-me/About";
import Hero from "../pages/hero-page/Hero";
import Projects from "../pages/my-projects/Projects";

// the order of items matters
export const routes = [
	{ path: "/", component: Hero },
	{ path: "/projects", component: Projects },
	{ path: "/about-me", component: About },
];

export const myProjects = [
	{
		name: "Forkify",
		path: "/projects/forkify",
		description: "recipe finder",
		src: "/projects/forkify",
		techStack: ["react", "react-router", "redux"],
		role: "front-end",
	},
	{
		name: "The Wild Oasis",
		path: "/projects/the-wild-oasis",
		description: "hotel manager",
		src: "/projects/the-wild-oasis",
		techStack: [
			"react",
			"styled-components",
			"react-router",
			"supabase",
			"react-query",
			"react-hook-form",
		],
		role: "full-stack",
	},
	{
		name: "WorldWise",
		path: "/projects/worldwise",
		description: "travel tracker",
		src: "/projects/worldwise",
		techStack: ["react", "leaflet", "react-router"],
		role: "front-end",
	},
];
