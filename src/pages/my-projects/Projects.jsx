// import ProjectsList from "./ProjectsList";
import SubHeading from "../../components/SubHeading";
import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import ProjectsSlider from "./ProjectSlider";

function Projects({ className }) {
	const { setIsAnimating } = useAnimatedRouting();

	function handleOnAnimationEnd(e) {
		e.animationName === "fadeOut" ? setIsAnimating(false) : "";
	}

	return (
		<section
			onAnimationEnd={handleOnAnimationEnd}
			className={`w-full absolute animate-[fadeIn_1s_forwards]   mx-auto border-1 h-[calc(100%-20rem)] 600:h-[calc(100%-10.2rem)]  min-h-[43.3rem] center flex-col  ${className}  `}
		>
			<SubHeading className=" mx-auto mb-[2.8rem] 425:mb-[3.8rem]  ">
				My Projects
			</SubHeading>

			<ProjectsSlider />
		</section>
	);

	// return (
	// 	<section
	// 		onAnimationEnd={handleOnAnimationEnd}
	// 		className={`text-[4rem] absolute  mx-auto max-md:pb-36  md:h-[85%]    left-0   w-full flex flex-col justify-center items-center     ${className}`}
	// 	>
	// 		<SubHeading className="md:mb-20 xl:mb-[6rem]">My Projects</SubHeading>

	// <ProjectsList />
	// 	</section>
	// );
}

export default Projects;
