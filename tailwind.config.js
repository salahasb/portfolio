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
			animation: {
				"fadeIn-translateUp": "fadeIn-translateUp 1s 3s forwards",
				"scale-fade-subheading": "scale-fade 1s 0.3s forwards",
				"scroll-indicator": "scroll 2s  ease-out  infinite",
				"heading-accent":
					"accent-scaleX 1.5s   cubic-bezier(0,-0.01,0,.99) 1s forwards",
				"scale-fade": "scale-fade 1s .8s forwards",
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
					"0%": { opacity: 0, transform: "scale(0.7)" },
					"100%": { opacity: 1, transform: "scale(1)" },
				},
				fadeOut: {
					// "0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				fadeIn: {
					// "0%": { opacity: 1 },
					"100%": { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};
