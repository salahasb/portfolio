import { PiArrowUpRightBold } from "react-icons/pi";
import Button from "../../components/Button";

function ProjectInfo({ project }) {
	return (
		<div className=" my-[4rem] flex    justify-between flex-wrap gap-x-40 ">
			<div className="flex flex-col  500:shrink-0 ">
				<span className="uppercase   text-[2rem] lg:text-[1.6rem] text-[#ddd] font-bold tracking-[0.2rem]     mb-3">
					Title
				</span>
				<span className="text-[3rem] font-semibold tracking-wider ">
					{project.name}
				</span>
			</div>

			<div className="flex flex-col 500:shrink-0">
				<span className="uppercase  text-[2rem] mb-3 lg:text-[1.6rem] text-[#ddd] font-bold tracking-[0.2rem]     ">
					role
				</span>
				<span className=" text-[3rem] font-semibold tracking-wider capitalize">
					{project.role}
				</span>
			</div>

			<div className="flex flex-col 500:shrink-0 md:basis-full lg:basis-auto ">
				<span className="uppercase  text-[2rem] lg:text-[1.6rem] text-[#ddd] font-bold tracking-[0.2rem]     mb-5">
					tech-stack
				</span>
				<ul className="flex flex-wrap gap-x-5 gap-y-4 max-w-[35rem] justify-self-center">
					{project.techStack.map((tech) => (
						<li
							key={tech}
							className="bg-brand-900 border border-brand-700 text-[1.2rem] font-semibold px-5 py-2 rounded-full"
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

			<div className="flex flex-col 500:shrink-0">
				<span className="uppercase  text-[2rem] mb-5 lg:text-[1.6rem] text-[#ddd] font-bold tracking-[0.2rem]     ">
					Live Demo
				</span>
				<Button className=" bg-brand-500 px-[clamp(1.2rem,2vw,2rem)] !py-2 lg:!py-3  justify-self-center  h-fit ">
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
		</div>
	);
}

export default ProjectInfo;
