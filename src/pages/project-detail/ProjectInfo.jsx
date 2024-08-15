import { PiArrowUpRightBold } from "react-icons/pi";
import Button from "../../components/Button";

function ProjectInfo({ project }) {
	return (
		<div className="px-5 mt-[clamp(2rem,5vw,4rem)] mb-[5rem] lg:my-[4rem]  grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_1fr_auto]   lg:grid-cols-4 gap-y-10  gap-x-20  ">
			<div className="flex flex-col   ">
				<span className="uppercase      text-[#ddd] font-bold tracking-[0.2rem] mb-[clamp(0.1rem,0.5vw,0.75rem)] text-[clamp(0rem,3vw,1.6rem)] ">
					Title
				</span>
				<span className=" font-semibold tracking-wider text-[clamp(0rem,4.4vw,3rem)] ">
					{project.name}
				</span>
			</div>

			<div className="flex flex-col ">
				<span className="uppercase   mb-[clamp(0.1rem,0.5vw,0.75rem)]  text-[#ddd] font-bold tracking-[0.2rem] text-[clamp(0rem,3vw,1.6rem)]  col-start-2 col-end-3    ">
					role
				</span>
				<span className="  font-semibold tracking-wider capitalize text-[clamp(0rem,4.4vw,3rem)]">
					{project.role}
				</span>
			</div>

			<div className="flex flex-col  lg:w-[32rem] max-sm:col-start-1 max-sm:row-start-2">
				<span className="uppercase    text-[#ddd] font-bold tracking-[0.2rem]     mb-5 text-[clamp(0rem,3vw,1.6rem)]">
					tech-stack
				</span>
				<ul className="flex flex-wrap gap-x-5 gap-y-4 max-w-[30rem] justify-self-center">
					{project.techStack.map((tech) => (
						<li
							key={tech}
							className="bg-brand-900 border border-brand-700 text-[clamp(0rem,2.4vw,1.2rem)] font-semibold px-[clamp(0rem,2vw,1.25rem)] py-[clamp(0rem,0.2vw,0.2rem)] rounded-full"
						>
							{tech}
						</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col lg:justify-self-end row-start-1 row-end-2 col-start-2 sm:col-start-3 lg:col-start-4 ">
				<span className="uppercase   mb-[clamp(0.5rem,1.8vw,1.25rem)]  text-[#ddd] font-bold tracking-[0.2rem]     text-[clamp(0rem,3vw,1.6rem)] ">
					Live Demo
				</span>
				<Button className=" bg-brand-500 px-[clamp(0rem,2.4vw,2rem)] py-[clamp(0rem,1.2vw,0.75rem)]   justify-self-center  w-fit ">
					<a
						href=" "
						target="_blank"
						className="flex gap-x-2 h-fit items-center"
					>
						<span className=" leading-[0.9] text-[clamp(0rem,4.2vw,2.2rem)]">
							Visit
						</span>
						<PiArrowUpRightBold className=" text-[clamp(0rem,4vw,2.2rem)] -mr-1" />
					</a>
				</Button>
			</div>
		</div>
	);
}

export default ProjectInfo;
