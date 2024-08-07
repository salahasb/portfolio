import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project, style }) {
	const [isAnimating, setIsAnimating] = useState(true);
	const [imageHasLoaded, setImageHasLoaded] = useState(false);

	return (
		<div
			onAnimationEnd={() => setIsAnimating(false)}
			style={isAnimating ? style : {}}
			className={` p-7 lg:p-10 border-white/30 border-[1px]  bg-brand-900 rounded-3xl max-h-full flex flex-col  hover:scale-105 transition-transform duration-300  ease-out   `}
		>
			<div
				style={{ backgroundImage: `url('${project.src}-small.jpg')` }}
				className={`aspect-video w-full mb-7 rounded-2xl overflow-hidden  bg-no-repeat bg-contain bg-center `}
			>
				<img
					onLoad={() => setImageHasLoaded(true)}
					src={`${project.src}.webp`}
					className={`opacity-0 transition-opacity duration-500 ${
						imageHasLoaded ? "opacity-100" : ""
					} `}
					alt={`${project.name} app desktop screenshot`}
				/>
			</div>

			<div className="@container">
				<h3
					className={`mb-12 sm:mb-10 lg:mb-14  leading-9  425:leading-tight   text-clamp-project-name 1474:mb-20   `}
				>
					<span className="font-semibold  ">{project.name}</span>
					<span> - </span>
					<span className="text-clamp-project-description ">
						{project.description}
					</span>
				</h3>
			</div>
			<div className="flex justify-between items-center mt-auto @container">
				<ul className="flex  ">
					{project.techStack.map((tool) => (
						<li
							className=" center p-[2cqi] aspect-square -mr-2  bg-brand-900 rounded-full border-white/30  border"
							key={tool}
						>
							<img
								src={`/icons/${tool}.png`}
								className="w-[8cqi] max-w-6 "
								alt=""
							/>
						</li>
					))}
				</ul>

				<Link
					to={`projects/${project.name.toLowerCase().replace(/ /g, "-")}`}
					className=" flex gap-1   px-6   py-[0.1rem]   md:px-5   md:py-[0.1rem] lg:px-6  rounded-lg bg-brand-600 items-center text-clamp-project-button font-semibold tracking-wide text-gray-200 transition-transform duration-300 hover:scale-110  "
				>
					View
				</Link>
			</div>
		</div>
	);
}

export default ProjectCard;
