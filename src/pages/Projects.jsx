import ProjectsSlider from "../features/projects-page/ProjectsSlider";
import ProjectCard from "../features/projects-page/ProjectCard";
import SubHeading from "../components/SubHeading";
import { useAnimatedRouting } from "../features/animated-routing/contexts/AnimatedRoutingContext";

function Projects({ className }) {
	const { setIsAnimating } = useAnimatedRouting();
	return (
		<section
			onAnimationEnd={() => setIsAnimating(false)}
			className={`text-[4rem] absolute top-0 left-0 animate-[fadeIn_1s_forwards] size-full flex flex-col justify-start items-center opacity-0 ${className}`}
		>
			<SubHeading>My Projects</SubHeading>

			<ProjectsSlider />
		</section>
	);
}

export default Projects;
