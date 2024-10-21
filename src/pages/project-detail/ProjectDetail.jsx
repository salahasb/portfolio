import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import ProjectInfo from "./ProjectInfo";
import ProjectOverview from "./ProjectOverview";
import ProjectFeatures from "./ProjectFeatures";

function ProjectDetail({ className, project }) {
	const { setIsAnimating } = useAnimatedRouting();
	return (
		<section
			className={`px-10 500:px-14 md:px-20 xl:px-36 absolute   w-full  inset-0  max-w-[120rem] mx-auto  animate-[fadeIn_1.5s_forwards] ${className}`}
			onAnimationEnd={(e) => {
				e.animationName === "fadeOut" ? setIsAnimating(false) : "";
			}}
		>
			<h2 className="text-[clamp(0rem,6.4vw,7rem)] mx-auto w-fit mt-[clamp(0rem,1.5vw,1.2rem)] font-bold tracking-wider mb-[clamp(1.6rem,2vw,2.6rem)]  ">
				{project.name}
			</h2>

			<div className="overflow-hidden rounded-[15px] sm:rounded-[20px]   md:rounded-[30px] lg:rounded-[40px] aspect-video           ">
				{/* <img
					src={`${project.src}.webp`}
					alt={`${project.name} app screenshot`}
				/> */}
				<img
					src={`${project.name.toLowerCase().replace(" ", "")}-big.webp`}
					alt={`${project.name} app screenshot`}
				/>
			</div>

			<ProjectInfo project={project} />

			<div className="w-[98%] lg:w-full mx-auto  lg:block h-[0.1rem]   min-[600px]:h-[0.3rem] rounded-md bg-[#eee] mb-[3.2rem] lg:mb-[6rem]"></div>

			<div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-28 pb-36">
				<ProjectOverview project={project} />
				<ProjectFeatures project={project} />
			</div>
		</section>
	);
}

export default ProjectDetail;
