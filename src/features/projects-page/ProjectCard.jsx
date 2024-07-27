import { useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowUpRightBold } from "react-icons/pi";

function ProjectCard({ project, style }) {
	const [isAnimating, setIsAnimating] = useState(true);

	return (
		<div
			onAnimationEnd={() => setIsAnimating(false)}
			style={isAnimating ? style : {}}
			className={`p-8  lg:p-10 border-white/30 border-[1px]  bg-brand-900 rounded-3xl max-h-full flex flex-col  hover:scale-105 transition-transform duration-300  ease-out   `}
		>
			<img
				src={project.src}
				className="rounded-2xl mb-6 500:mb-8 sm:mb-11"
				alt={project.name}
			/>

			<h3 className="mb-9 sm:mb-16    leading-9  425:leading-snug  text-[2.2rem]   xl:text-[2.8rem]">
				<span className="font-semibold  ">{project.name}</span>
				<span> - </span>
				<span className="text-[2rem] xl:text-[2.4rem] ">
					{project.description}
				</span>
			</h3>

			<div className="flex justify-between items-center     mt-auto">
				<ul className="flex  ">
					{project.techStack.map((tool) => (
						<li
							className=" center p-3 -mr-3  bg-brand-900 rounded-full border-gray-700 border"
							key={tool}
						>
							<img src={`/icons/${tool}.png`} className="w-5 lg:w-8" alt="" />
						</li>
					))}
				</ul>

				<Link
					to={`projects/${project.name.toLowerCase().replace(/ /g, "-")}`}
					className=" flex gap-1   px-7   py-[0.1rem] 500:px-3 md:px-7   md:py-[0.1rem]  rounded-full bg-brand-600 items-center text-[1.8rem] 500:text-[1.2rem] md:text-[1.8rem] font-semibold tracking-wide text-gray-200 transition-transform duration-300 hover:scale-110  "
				>
					View
				</Link>
			</div>
		</div>
	);
}

export default ProjectCard;
