import Button from "../../components/Button";
import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import useAnimatedNavigate from "../../features/animated-routing/hooks/useAnimatedNavigate";
import { handleOnAnimationEnd } from "../../utils/helpers";
import HeroContent from "./HeroContent";

function Hero({ className }) {
	const { setIsAnimating } = useAnimatedRouting();
	const { handleNavigate } = useAnimatedNavigate();

	return (
		<section
			onAnimationEnd={(e) => handleOnAnimationEnd(e, setIsAnimating)}
			className={`px-10 500:px-14 md:px-20 xl:px-36 h-[calc(100%-8.9rem)] flex flex-col items-center justify-center absolute -z-0    text-gray-200  ${className}`}
		>
			<HeroContent />

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
