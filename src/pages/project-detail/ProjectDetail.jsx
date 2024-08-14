import { PiArrowUpRight, PiArrowUpRightBold } from "react-icons/pi";
import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import { myProjects } from "./../../utils/constants";
import Button from "../../components/Button";
import ProjectInfo from "./ProjectInfo";
import ProjectOverview from "./ProjectOverview";
import ProjectFeatures from "./ProjectFeatures";

function ProjectDetail({ className, project }) {
	const { setIsAnimating } = useAnimatedRouting();
	return (
		<section
			className={`absolute   w-full  inset-0  max-w-[120rem] mx-auto  ${className}`}
			onAnimationEnd={(e) => {
				e.animationName === "fadeOut" ? setIsAnimating(false) : "";
			}}
		>
			<h2 className="text-clamp-project-detail-name mx-auto w-fit mt-3 lg:mt-16 font-bold tracking-wider mb-10 md:mb-12 lg:mb-12">
				{project.name}
			</h2>

			<div className="overflow-hidden rounded-[15px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] aspect-video   lg:mb-[5rem]  ">
				{/* <img
					src={`${project.src}.webp`}
					alt={`${project.name} app screenshot`}
				/> */}
				<img
					src={`/projects/the-wild-oasis.png`}
					alt={`${project.name} app screenshot`}
				/>
			</div>

			<ProjectInfo project={project} />

			<div className="w-full  h-[0.3rem] rounded-md bg-[#eee] mb-[8rem]"></div>

			<div className="flex justify-between gap-36 pb-36">
				<ProjectOverview />
				<ProjectFeatures />
			</div>
			{/* </div> */}
		</section>
	);
}

export default ProjectDetail;
