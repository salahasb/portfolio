/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				425: "425px",
				500: "500px",
				900: "900px",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "3rem",
					425: "4rem",
					500: "6rem",
					sm: "8rem",
					lg: "10rem",
					// xl: "8rem",
					// "2xl": "10rem",
				},
				// screen: {
				// 	...defaultTheme.screens,
				// },
			},
			fontFamily: { sans: ["Inter", "sans-serif"] },
			colors: { brand: { 500: "#ec1352", 900: "#2f0410" } },
			fontSize: {
				"clamp-heading-sm": "clamp(2.5rem, 8vw, 14rem)",
				"clamp-heading-md": "clamp(2.5rem, 7.6vw , 14rem)",
				"clamp-heading-lg": "clamp(2.5rem, 8vw , 14rem)",
				"clamp-heading-xl": "clamp(2.5rem, 8.2vw , 14rem)",
				"clamp-heading-2xl": "clamp(2.5rem, 8.5vw , 17rem)",
			},
		},
	},
	plugins: [],
};
