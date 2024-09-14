import About from "../pages/about-me/About";
import Hero from "../pages/hero-page/Hero";
import Projects from "../pages/my-projects/Projects";

// the order of items routes in this array matters
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
		techStack: ["react-router", "redux"],
		role: "front-end",
		overview: [
			"Forkify is a dynamic recipe search application designed for food enthusiasts. With access to over 1,000,000 recipes, users can easily find and manage their favorite recipes all in one place.",
			"This app is built with a focus on user experience, offering a seamless and interactive way to explore, customize, and save recipes.",
		],
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
		link: "https://forkify-salahasb.vercel.app",
	},
	{
		name: "The Wild Oasis",
		path: "/projects/the-wild-oasis",
		description: "hotel manager",
		src: "/projects/the-wild-oasis",
		techStack: [
			"styled-components",
			"react-router",
			"supabase",
			"react-query",
			"react-hook-form",
		],
		role: "full-stack",
		overview: [
			"The Wild Oasis is an internal management app designed specifically for employees of a boutique hotel with 8 luxurious wooden cabins.",
			"The app streamlines hotel operations, from employee management to cabin bookings, providing an all-in-one solution for the hotel's administrative needs.",
		],
		features: [
			{
				title: "Employee Management:",
				description:
					" Secure sign-up and sign-in, profile updates, and user registration.",
			},
			{
				title: "Cabin Inventory:",
				description:
					" Manage cabin details with CRUD operations, filtering, sorting, and photo uploads.",
			},
			{
				title: "Booking Management:",
				description:
					" View and manage bookings with detailed guest information, status updates, and sorting/filtering options.",
			},
			{
				title: "Dashboard & Analytics:",
				description:
					" Overview of daily operations, booking statistics, and sales performance.",
			},
			{
				title: "Customizable Settings:",
				description:
					" Set application-wide settings like booking limits and pricing.",
			},
			{
				title: "Dark Mode:",
				description:
					" Toggle between light and dark themes for better usability.",
			},
		],
		link: "https://the-wild-oasis-salahasb.vercel.app",
	},
	{
		name: "WorldWise",
		path: "/projects/worldwise",
		description: "travel tracker",
		src: "/projects/worldwise",
		techStack: ["leaflet", "react-router"],
		role: "front-end",
		overview: [
			"WorldWise is an interactive map application that allows users to explore and document cities they've visited.",
			" With a seamless integration of a dynamic map and a user-friendly interface, the app provides a simple way to mark locations, record details, and visualize travel experiences.",
		],
		features: [
			{
				title: "Interactive Map: ",
				description:
					"A form appears with the selected city name, allowing users to add a date and notes before saving the city to their list.",
			},
			{
				title: "City Registration:",
				description:
					"Users can click on any city on the map (powered by Leaflet) to mark it and register it in the database.",
			},
			{
				title: "Real-Time Updates:",
				description:
					"Upon submission, the registered city is immediately added to a list on the left side of the interface, displaying all registered cities.",
			},
			{
				title: "City Details & Navigation:",
				description:
					"Clicking on a registered city from the list shows its details and moves the map directly to the city’s marker.",
			},
			{
				title: "Country Overview:",
				description:
					"A dedicated button leads to a list of all countries associated with the registered cities, providing a broader view of the user’s travels.",
			},
			{
				title: "Geolocation Feature:",
				description:
					"Users can allow the app to access their browser’s location, pinpointing their current position on the map.",
			},
		],
		link: "https://worldwise-salahasb.vercel.app",
	},
];
