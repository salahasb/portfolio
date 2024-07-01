import { memo, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Particle = memo(function Particle({ isPageLoaded }) {
	const [init, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {};

	const options = useMemo(
		() => ({
			background: {
				color: {
					value: "#25030d",
				},
			},
			fpsLimit: 50,
			interactivity: {
				events: {
					onClick: {
						enable: false,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "grab",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
					connect: { links: { opacity: 0.3, radius: 0 } },
					grab: { links: { opacity: 1 } },
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ec1352",
					distance: 150,
					enable: true,
					opacity: 0.3,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: true,
					speed: 1,
					straight: true,
				},
				number: {
					density: {
						enable: true,
						width: 900,
						height: 900,
					},
					value: 150,
				},
				opacity: {
					// value: 0.9,
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 0.1, max: 1 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	if (init) {
		return (
			<Particles
				className={`absolute -z-10 opacity-0 ${
					isPageLoaded ? "animate-[fadeIn_3s_forwards]" : ""
				}`}
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
			/>
		);
	}
});

export default Particle;
