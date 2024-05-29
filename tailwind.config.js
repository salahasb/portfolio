/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: { sans: ["Inter", "sans-serif"] },
			colors: { brand: { 500: "#ec1352", 900: "#16000b" } },
			screens: {
				425: "425px",
				500: "500px",
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
		},
	},
	plugins: [],
};
