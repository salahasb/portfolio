import ProjectsSlider from "../features/projects-page/ProjectsSlider";
import SubHeading from "../components/SubHeading";
import { useAnimatedRouting } from "../features/animated-routing/contexts/AnimatedRoutingContext";

function Projects({ className }) {
	const { setIsAnimating } = useAnimatedRouting();
	return (
		<section
			onAnimationEnd={() => setIsAnimating(false)}
			className={`text-[4rem] absolute  top-0 left-0 h-[80%] animate-[fadeIn_1s] w-full flex flex-col justify-center items-center mt-14 lg:mt-24 ${className}`}
		>
			<SubHeading className={"mb-[8rem]  "}>My Projects</SubHeading>

			<ProjectsSlider />
		</section>
	);
}

export default Projects;
