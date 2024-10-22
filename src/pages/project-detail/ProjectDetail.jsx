import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import ProjectInfo from "./ProjectInfo";
import ProjectOverview from "./ProjectOverview";
import ProjectFeatures from "./ProjectFeatures";
import ProjectDetailPicture from "./ProjectDetailPicture";
import ProjectDetailTitle from "./ProjectDetailTitle";
import { handleOnAnimationEnd } from "../../utils/helpers";

function ProjectDetail({ className, project }) {
	const { setIsAnimating } = useAnimatedRouting();

	// Styles

	return (
		<section
			className={`px-10 500:px-14 md:px-20 xl:px-36 absolute   w-full  inset-0  max-w-[120rem] mx-auto  animate-[fadeIn_1.5s_forwards] ${className}`}
			onAnimationEnd={(e) => handleOnAnimationEnd(e, setIsAnimating)}
		>
			<ProjectDetailTitle title={project.name} />

			<ProjectDetailPicture project={project} />

			<ProjectInfo project={project} />

			<div className="w-[98%] lg:w-full mx-auto  lg:block h-[0.1rem]   min-[600px]:h-[0.3rem] rounded-md bg-[#eee] mb-[4rem] sm:mb-[6rem] "></div>

			<div className="flex flex-col lg:flex-row justify-between gap-[2.8rem] sm:gap-[4rem] lg:gap-28 pb-36">
				<ProjectOverview project={project} />
				<ProjectFeatures project={project} />
			</div>
		</section>
	);
}

export default ProjectDetail;
