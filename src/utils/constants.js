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
		overview:
			"Forkify is a dynamic recipe search application designed for food enthusiasts. With access to over 1,000,000 recipes, users can easily find and manage their favorite recipes all in one place. This app is built with a focus on user experience, offering a seamless and interactive way to explore, customize, and save recipes.",
		features: [
			{
				title: "Extensive Recipe Search:",
				description:
					"Users can search through a database of over 1,000,000 recipes with pagination to easily browse through results.",
			},
			{
				title: "Detailed Recipe View:",
				description:
					"Each recipe includes detailed information such as the name, image, cooking time, servings, ingredients, and step-by-step instructions.",
			},
			{
				title: "Interactive Serving Size Adjustment:",
				description:
					" Users can adjust the number of servings, and the ingredients automatically scale to match the selected serving size.",
			},
			{
				title: "Recipe Bookmarking:",
				description:
					"Users can bookmark their favorite recipes, which are stored locally on their device for easy access.",
			},
			{
				title: "Add Your Own Recipes:",
				description:
					"A user-friendly form allows users to add their own recipes, complete with all relevant details, to the backend (external API).",
			},
		],
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
		overview: "",
		features: [],
	},
	{
		name: "WorldWise",
		path: "/projects/worldwise",
		description: "travel tracker",
		src: "/projects/worldwise",
		techStack: ["react", "leaflet", "react-router"],
		role: "front-end",
		overview: "",
		features: [],
	},
];
