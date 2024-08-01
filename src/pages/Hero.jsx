import { useEffect } from "react";
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
			className={`h-full flex flex-col items-center absolute -z-0 justify-center -mt-[3%] text-gray-200  ${className}`}
		>
			<h1
				className={` animate-fadeIn-translateUp translate-y-[10rem] opacity-0 text-center text-clamp-heading-sm 500:text-clamp-heading-md md:text-clamp-heading-lg xl:text-clamp-heading-xl 2xl:text-clamp-heading-2xl font-bold md:font-semibold relative leading-[1.4] 500:leading-[1.3] xl:leading-[1.25] xl:tracking-tight mb-5 xl:mb-10 `}
			>
				<span className=" main-heading-accent">Passionate</span>

				<span> Front-end Web Developer</span>
			</h1>

			<p className="animate-[fadeIn-translateUp_1s_0.3s_forwards] opacity-0 translate-y-[10rem] w-[95%] 425:w-[90%] 500:w-[85%]  lg:max-w-[110rem] text-[1.5rem] 425:text-[1.8rem] 500:text-[2rem] md:text-[2.2rem] 900:text-[2.5rem] text-center leading-[1.6] mb-12 xl:mb-16 lg:font-medium  ">
				I transform designs into reactive and responsive web apps/sites using
				the latest technologies. I also prioritize writing clean and
				maintainable code.
			</p>

			<Button
				className="px-10 md:px-14 text-[2rem] md:text-[2.2rem] xl:text-[2.6rem] animate-[fadeIn_1s_0.5s_forwards] opacity-0"
				onClick={() => handleNavigate("/projects")}
			>
				View my work
			</Button>
		</section>
	);
}

export default Hero;
