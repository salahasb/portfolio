import ProjectsList from "../features/projects-page/ProjectsList";
import SubHeading from "../components/SubHeading";
import { useAnimatedRouting } from "../features/animated-routing/contexts/AnimatedRoutingContext";

function Projects({ className }) {
	const { setIsAnimating } = useAnimatedRouting();
	return (
		<section
			onAnimationEnd={() => setIsAnimating(false)}
			className={`text-[4rem] absolute  mx-auto  top-[4rem] sm:top-[2rem] md:mt-[6rem] left-0  animate-[fadeIn_1s] w-full flex flex-col justify-center items-center     ${className}`}
		>
			<SubHeading className={"mb-[5rem] sm:mb-[3.5rem] "}>
				My Projects
			</SubHeading>

			<ProjectsList />
		</section>
	);
}

export default Projects;
