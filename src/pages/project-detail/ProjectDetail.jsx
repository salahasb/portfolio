import { PiArrowUpRight, PiArrowUpRightBold } from "react-icons/pi";
import { useAnimatedRouting } from "../../features/animated-routing/contexts/AnimatedRoutingContext";
import { myProjects } from "./../../utils/constants";
import Button from "../../components/Button";

function ProjectDetail({ className, project }) {
	const { setIsAnimating } = useAnimatedRouting();
	return (
		<section
			className={`absolute   w-full  inset-0  max-w-[140rem] mx-auto  ${className}`}
			onAnimationEnd={(e) => {
				e.animationName === "fadeOut" ? setIsAnimating(false) : "";
			}}
		>
			<h2 className="text-clamp-project-detail-name mx-auto w-fit mt-3 lg:mt-16 font-bold tracking-wider mb-10 md:mb-12 lg:mb-16">
				{project.name}
			</h2>

			<div className="overflow-hidden rounded-[15px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px] aspect-video mb-24 lg:mb-[10rem]  ">
				{/* <img
					src={`${project.src}.webp`}
					alt={`${project.name} app screenshot`}
				/> */}
				<img
					src={`/projects/the-wild-oasis.png`}
					alt={`${project.name} app screenshot`}
				/>
			</div>

			<div className="mb-24 lg:mb-[8rem]">
				<div className="flex justify-between font-bold items-center mb-10 @container">
					<h3 className="text-[clamp(0rem,7vw,6rem)] font-bold tracking-wide">
						About
					</h3>

					<Button className=" bg-brand-500 px-[clamp(1.2rem,2vw,2rem)] !py-2 lg:!py-3  ">
						<a
							href=" "
							target="_blank"
							className="flex gap-x-2 h-fit items-center"
						>
							<span className=" leading-[1] text-clamp-project-detail-visit">
								Visit
							</span>
							<PiArrowUpRightBold className=" text-[clamp(0rem,5vw,2.2rem)] -mr-1" />
						</a>
					</Button>
				</div>

				<div className="text-clamp-project-detail-description leading-relaxed max-w-[80rem]">
					<p className="mb-5">
						ACT Responsable is an association that identifies and brings
						together the best committed advertising around the world in order to
						raise awareness of major issues (solidarity, environment, human
						rights and education).
					</p>
					<p className="mb-5">
						The objective was to take care of the redesign of the French site,
						focused on the actions carried out by ACT Responsable, i.e.
						exhibitions, interventions in schools or the NG'Ad club.
					</p>
					<p>
						ACT Responsable is an association that identifies and brings
						together the best committed advertising around the world in order to
						raise awareness of major issues (solidarity, environment, human
						rights and education).
					</p>
				</div>
			</div>

			<div className="pb-36 flex   flex-wrap gap-10 sm:gap-y-16  gap-x-56  ">
				<div className="flex flex-col  500:shrink-0 ">
					<span className="uppercase  text-[2rem] lg:text-[2.4rem] font-extrabold  text-brand-400 mb-3">
						Title
					</span>
					<span className="text-[2.6rem]">{project.name}</span>
				</div>

				<div className="flex flex-col 500:shrink-0">
					<span className="uppercase text-[2rem] mb-[1.7rem] lg:text-[2.4rem] font-extrabold  text-brand-400 ">
						Url
					</span>
					<span className=" text-[1.4rem] sm:text-[1.6rem]   mb-2 font-bold   tracking-widest">
						www.the-wild-oasis.vercel.app
					</span>
				</div>

				<div className="flex flex-col 500:shrink-0 md:basis-full lg:basis-auto">
					<span className="uppercase text-[2rem] lg:text-[2.4rem] font-extrabold  text-brand-400 mb-5">
						tech-stack
					</span>
					<ul className="flex flex-wrap gap-x-5 gap-y-4 max-w-[50rem]">
						{project.techStack.map((tech) => (
							<li
								key={tech}
								className="bg-brand-900 border border-gray-600 text-[1.2rem] font-semibold px-5 py-2 rounded-full"
							>
								{tech}
							</li>
						))}
						{/* <li
							// key={tech}
							className="bg-brand-900 border border-gray-600 text-[1.2rem] px-5 py-2 rounded-full"
						>
							{"dsdsd"}
						</li> */}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default ProjectDetail;
