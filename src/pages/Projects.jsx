import ProjectsList from "../features/projects-page/ProjectsList";
import SubHeading from "../components/SubHeading";
import { useAnimatedRouting } from "../features/animated-routing/contexts/AnimatedRoutingContext";

function Projects({ className }) {
	const { setIsAnimating } = useAnimatedRouting();

	return (
		<section
			onAnimationEnd={() => setIsAnimating(false)}
			className={`text-[4rem] absolute  mx-auto max-md:pb-36  md:h-[85%]    left-0   w-full flex flex-col justify-center items-center     ${className}`}
		>
			<SubHeading className="md:mb-20 xl:mb-[6rem]">My Projects</SubHeading>

			<ProjectsList />
		</section>
	);
}

export default Projects;
