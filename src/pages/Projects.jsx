import ProjectsList from "../features/projects-page/ProjectsList";
import SubHeading from "../components/SubHeading";
import { useAnimatedRouting } from "../features/animated-routing/contexts/AnimatedRoutingContext";

function Projects({ className }) {
	const { setIsAnimating } = useAnimatedRouting();

	return (
		<section
			onAnimationEnd={() => setIsAnimating(false)}
			className={`text-[4rem] absolute  mx-auto max-md:pb-36 top-[4rem] sm:top-[2rem] max-md:mt-[3rem] md:mt-[10rem] left-0  animate-[fadeIn_1s] w-full flex flex-col justify-center items-center     ${className}`}
		>
			<SubHeading className={"mb-[5rem] md:mb-20 xl:mb-28"}>
				My Projects
			</SubHeading>

			<ProjectsList />
		</section>
	);
}

export default Projects;
