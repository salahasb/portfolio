import Button from "../../components/Button";
import { LuArrowUpRight } from "react-icons/lu";

function ProjectInfo({ project }) {
	return (
		<div className="px-5 mt-[clamp(2rem,10vw,4rem)] max-sm:mb-[clamp(2rem,7vw,3rem)] sm:mb-[2rem]   lg:my-[4rem]  grid grid-cols-[1.2fr_1fr_auto]   lg:grid-cols-[1.2fr_0.8fr_1fr_auto]  xl:grid-cols-[0.8fr_0.6fr_1fr_auto] gap-y-3 md:gap-y-8 gap-x-10 md:gap-x-20  ">
			<div className="flex flex-col   ">
				<span className="uppercase      text-[#ccc] font-bold tracking-[0.2rem] mb-[clamp(0.1rem,0.5vw,0.75rem)] text-[clamp(0rem,2.2vw,1.6rem)] ">
					Title
				</span>
				<span className=" font-semibold tracking-wider text-[clamp(0rem,3.2vw,2.8rem)]   ">
					{project.name}
				</span>
			</div>

			<div className="flex flex-col ">
				<span className="uppercase   mb-[clamp(0.1rem,0.5vw,0.75rem)]  text-[#ccc] font-bold tracking-[0.2rem] text-[clamp(0rem,2.2vw,1.6rem)]  col-start-2 col-end-3    ">
					role
				</span>
				<span className="  font-semibold tracking-wider capitalize text-[clamp(0rem,3.2vw,2.8rem)]">
					{project.role}
				</span>
			</div>

			<div className="flex flex-col      max-sm:col-start-1 max-sm:row-start-2 overflow-hidden">
				<span className="uppercase    text-[#ccc] font-bold tracking-[0.2rem]    mb-[clamp(0.1rem,1vw,2.8rem)] text-[clamp(0rem,2.2vw,1.6rem)]">
					tech-stack
				</span>
				<ul className="flex   gap-x-2 sm:gap-x-5 gap-y-4  lg:max-w-[75%] items-center justify-self-center overflow-x-auto  custom-scrollbar pb-2">
					{project.techStack.map((tech) => (
						<li
							key={tech}
							className="bg-brand-900 border shrink-0 border-brand-700 text-[clamp(0rem,2.4vw,1.2rem)] font-semibold px-[clamp(0rem,2vw,1.25rem)] py-[clamp(0rem,0.2vw,0.2rem)] rounded-full"
						>
							{tech}
						</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col lg:justify-self-end row-start-1 row-end-2 col-start-3 sm:col-start-3 lg:col-start-4 ">
				<span className="uppercase   mb-[clamp(0.5rem,1.2vw,1.4rem)]  text-[#ccc] font-bold tracking-[0.2rem]     text-[clamp(0rem,2.2vw,1.6rem)] ">
					Url
				</span>
				<Button className=" bg-brand-500 text-[clamp(0rem,2.6vw,2.4rem)] px-[clamp(0rem,1.8vw,1.6rem)] py-[clamp(0rem,0.1vw,0.1rem)]   justify-self-center  w-fit ">
					<a
						href={project.link}
						target="_blank"
						className="flex gap-x-[clamp(0rem,0.6vw,0.6rem)] h-fit items-center"
					>
						<span className=" mt-[1px]">Visit</span>
						<LuArrowUpRight className=" text-[clamp(0rem,2.8vw,2.2rem)] stroke-[2.7px]  -mr-[4px] sm:-mr-[3px]" />
					</a>
				</Button>
			</div>
		</div>
	);
}

export default ProjectInfo;
