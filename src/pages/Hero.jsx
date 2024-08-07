import Button from "../components/Button";
import { useAnimatedRouting } from "../features/animated-routing/contexts/AnimatedRoutingContext";
import useAnimatedNavigate from "../features/animated-routing/hooks/useAnimatedNavigate";

function Hero({ className }) {
	const { setIsAnimating } = useAnimatedRouting();
	const handleNavigate = useAnimatedNavigate();

	return (
		<section
			onAnimationEnd={(e) => {
				e.animationName === "fadeOut" ? setIsAnimating(false) : "";
			}}
			className={`h-[calc(100%-8.9rem)] flex flex-col items-center justify-center absolute -z-0    text-gray-200  ${className}`}
		>
			<h1
				className={` animate-[fadeIn-translateUp_1s_0.2s_forwards] translate-y-[10rem] opacity-0 text-center text-clamp-heading-sm 500:text-clamp-heading-md md:text-clamp-heading-lg xl:text-clamp-heading-xl 2xl:text-clamp-heading-2xl font-bold md:font-semibold relative leading-[1.4] 500:leading-[1.3] lg:leading-[1.2] xl:tracking-tight mb-5 xl:mb-10 `}
			>
				<span className=" main-heading-accent">Passionate</span>

				<span> Front-end Web Developer</span>
			</h1>

			<p className="animate-[fadeIn-translateUp_1s_0.5s_forwards] opacity-0 translate-y-[10rem] w-[95%] 425:w-[90%] 500:w-[85%] lg:max-w-[90rem] xl:max-w-[100rem] text-[1.4rem] 425:text-[1.6rem] 500:text-[1.8rem] md:text-[2rem] 900:text-[2rem] lg:text-[2.2rem] xl:text-[2.4rem]   text-center leading-[1.6] mb-8 xl:mb-20 lg:font-medium  ">
				I transform designs into reactive and responsive web apps/sites using
				React.js. prioritizing writing clean and maintainable code.
			</p>

			<Button
				className="px-8 lg:px-12 text-[1.8rem] md:text-[2rem] lg:text-[2.2rem]  animate-[fadeIn-translateUp_1s_0.8s_forwards] opacity-0  hover:scale-105 "
				onClick={() => handleNavigate("/projects")}
			>
				See My Work
			</Button>
		</section>
	);
}

export default Hero;
