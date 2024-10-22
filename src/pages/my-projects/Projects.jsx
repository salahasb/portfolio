import SubHeading from "../../components/SubHeading";
import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import { handleOnAnimationEnd } from "../../utils/helpers";
import ProjectsSlider from "./ProjectSlider";

function Projects({ className }) {
	const { setIsAnimating } = useAnimatedRouting();

	// Styles
	const projectPageClasses = ` 500:px-14 md:px-20 xl:px-36  w-full absolute animate-[fadeIn_3s_forwards]   mx-auto border-1 h-[calc(100%-20rem)] 600:h-[calc(100%-10.2rem)]  min-h-[43.3rem]  center flex-col  ${className}  `;

	return (
		<section
			onAnimationEnd={(e) => handleOnAnimationEnd(e, setIsAnimating)}
			className={projectPageClasses}
		>
			<SubHeading className=" mx-auto mb-[2.8rem] 425:mb-[3.8rem]  xl:mb-[3.6rem]  ">
				My Projects
			</SubHeading>

			<ProjectsSlider />
		</section>
	);
}

export default Projects;
