/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import containerPlugin from "@tailwindcss/container-queries";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				425: "425px",
				500: "500px",
				900: "900px",
				1220: "1220px",
				1474: "1474px",
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
			colors: {
				brand: {
					300: "#f47197",
					400: "#f04275",
					500: "#ec1352",
					600: "#bd0f42",
					700: "#8e0b31",
					800: "#5e0821",
					850: "#470619",
					900: "#2f0410",
				},
			},
			fontSize: {
				// Heading
				"clamp-heading-sm": "clamp(2.5rem, 8vw, 14rem)",
				"clamp-heading-md": "clamp(2.5rem, 7.6vw , 14rem)",
				"clamp-heading-lg": "clamp(2.5rem, 8vw , 14rem)",
				"clamp-heading-xl": "clamp(2.5rem, 8.2vw , 14rem)",
				"clamp-heading-2xl": "clamp(2.5rem, 8.5vw , 17rem)",
				// Loader
				"clamp-loader": "clamp(1.2rem, 3vw , 2.2rem)",
				// project card
				"clamp-project-name": "clamp(0rem, 8cqi , 2.5rem)",
				"clamp-project-description": "clamp(0rem, 7cqi , 2.2rem)",
				"clamp-project-button": "clamp(0rem, 6cqi , 0.4em)",
			},
			animation: {
				"fadeIn-translateUp": "fadeIn-translateUp 1s  forwards",
				"scale-fade-subheading": "scale-fade 1s 0.3s forwards",
				"scroll-indicator": "scroll 2s  ease-out  infinite ",
				"heading-accent":
					"accent-scaleX 1.5s   cubic-bezier(0,-0.01,0,.99) 0.3s forwards",
				"scale-fade": "scale-fade 1s 2s forwards",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(-50%,1.6rem) ",
						opacity: 0,
					},
				},
				"fadeIn-translateUp": {
					"0%": {
						opacity: 0,
						transform: "translateY(10rem) ",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0rem) ",
					},
				},
				"fadeIn-translateDown": {
					"0%": {
						opacity: 0,
						transform: "translateY(-100%) ",
					},
					"100%": {
						opacity: 1,
						transform: "translateY(0%) ",
					},
				},
				"accent-scaleX": {
					"0%": { transform: "scaleX(0)" },
					"100%": { transform: "scaleX(1)" },
				},
				"scale-fade": {
					"0%": { opacity: 0, transform: "scale(0.5)" },
					"100%": { opacity: 1, transform: "scale(1)" },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				scaleY: {
					from: {
						transform: "scaleY(0)",
					},
					to: {
						transform: "scaleY(1)",
					},
				},
				fadeInBlur: {
					"0%": { backdropFilter: "blur(1px) opacity(0)" },
					"100%": { backdropFilter: "blur(1px) opacity(1)" },
				},
			},
			backdropBlur: {
				xs: "1px",
			},
		},
	},
	plugins: [containerPlugin],
};
